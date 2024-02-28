import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProjectListSuccess } from './project.action';
import { catchError, map, of, switchMap, takeUntil } from 'rxjs';
import { notificationErrorDialog } from '../dialog/dialog.action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectType } from './project.type';
import { setDataTable } from '../datatable/datatable.action';
import { ProjectTableHeads } from './project.state';

@Injectable()
export class ProjectEffect {
  constructor(
    private projectService: ProjectService,
    private actions$: Actions,
    private store: Store<any>,
    private router: Router
  ) {}
  _getProjectList = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.LIST),
      switchMap(({ payload }) => {
        return this.projectService.list(payload).pipe(
          map((data) => {
            const { result } = data;
            this.store.dispatch(setDataTable({...result, table_heads: ProjectTableHeads}));
            /* this.store.dispatch(setTableData(result.data));
            this.store.dispatch(setTableCurrentPage(result.current_page));
            this.store.dispatch(setTableLastPage(result.last_page));
            this.store.dispatch(setTableTotal(result.total));
            this.store.dispatch(setTableHeads(ProjectTableHeads)) */
            return getProjectListSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.LIST_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
}
