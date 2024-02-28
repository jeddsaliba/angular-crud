import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProjectListSuccess } from './project.action';
import { catchError, map, of, switchMap, takeUntil } from 'rxjs';
import { notificationErrorDialog } from '../dialog/dialog.action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectType } from './project.type';

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
          map((result) => {
            return getProjectListSuccess(result);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.LIST_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
}
