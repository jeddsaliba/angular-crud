import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { deleteProjectDeleteSuccess, getProjectDetailsSuccess, getProjectList, getProjectListSuccess, postProjectCreateSuccess, putProjectUpdateSuccess } from './project.action';
import { catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { notificationErrorDialog, notificationSuccessDialog } from '../dialog/dialog.action';
import { Store } from '@ngrx/store';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectType } from './project.type';
import { setDataTable } from '../datatable/datatable.action';
import { ProjectTableHeads } from './project.state';
import { Project } from './project.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class ProjectEffect {
  params: any = {
    page: 1,
    limit: 10,
    sort: 'id',
    direction: 'asc'
  };
  constructor(
    private projectService: ProjectService,
    private actions$: Actions,
    private store: Store<Project>,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) {}
  _getProjectList = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.LIST),
      switchMap(({ payload }) => {
        this.params = payload;
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
  _postProjectTaskCreate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.CREATE),
      switchMap(({ payload }) => {
        const { data } = payload;
        return this.projectService.create(data).pipe(
          map((data) => {
            this.store.dispatch(notificationSuccessDialog(data.message));
            return postProjectCreateSuccess(data);
          }),
          tap(({ payload }) => {
            const { result } = payload;
            const encryptedID = this.authService.encrypt(result.id.toString());
            this.router.navigate(['project', encryptedID]);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.CREATE_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _putProjectTaskUpdate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.UPDATE),
      switchMap(({ payload }) => {
        const { id, data } = payload;
        return this.projectService.update(id, data).pipe(
          map((data) => {
            this.store.dispatch(notificationSuccessDialog(data.message));
            return putProjectUpdateSuccess(data);
          }),
          tap(() => {
            this.location.back();
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.UPDATE_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _deleteProjectTaskDelete = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.DELETE),
      switchMap(({ payload }) => {
        const { id } = payload;
        return this.projectService.delete(id).pipe(
          map((data) => {
            this.store.dispatch(notificationSuccessDialog(data?.message));
            this.store.dispatch(getProjectList(this.params));
            return deleteProjectDeleteSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.DELETE_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
}
