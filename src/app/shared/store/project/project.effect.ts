import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProjectDetailsSuccess, getProjectListSuccess } from './project.action';
import { catchError, map, of, switchMap, takeUntil } from 'rxjs';
import { notificationErrorDialog } from '../dialog/dialog.action';
import { Store } from '@ngrx/store';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectType } from './project.type';
import { setDataTable } from '../datatable/datatable.action';
import { ProjectTableHeads } from './project.state';
import { Project } from './project.model';

@Injectable()
export class ProjectEffect {
  constructor(
    private projectService: ProjectService,
    private actions$: Actions,
    private store: Store<Project>
  ) {}
  _getProjectList = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.LIST),
      switchMap(({ payload }) => {
        return this.projectService.list(payload).pipe(
          map((data) => {
            const { result } = data;
            this.store.dispatch(
              setDataTable({
                ...result,
                table_heads: ProjectTableHeads,
                params: payload,
                message: data.message
              })
            );
            return getProjectListSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.LIST_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _getProjectDetails = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.DETAILS),
      switchMap(({ payload }) => {
        return this.projectService.details(payload).pipe(
          map((data) => {
            return getProjectDetailsSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.DETAILS_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
}
