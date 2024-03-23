import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { deleteProjectDeleteSuccess, getProjectDetailsSuccess, getProjectList, getProjectListSuccess, postProjectCreateSuccess, putProjectUpdateSuccess } from './project.action';
import { catchError, delay, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProjectType } from './project.type';
import { setDataTable } from '../datatable/datatable.action';
import { ProjectTableHeads } from './project.state';
import { Project } from './project.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '@shared/services/project/project.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { showLoader, showLoaderCancel, showSnackbar } from '../shared/shared.action';
import { Urls } from '@enum/urls';
import { environment } from '@environments/environment';

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
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
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
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.LIST_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _getProjectDetails = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.DETAILS),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        return this.projectService.details(payload).pipe(
          map((data) => {
            return getProjectDetailsSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.DETAILS_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _postProjectTaskCreate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.CREATE),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { data } = payload;
        return this.projectService.create(data).pipe(
          map((data) => {
            this.store.dispatch(showSnackbar(data.message));
            return postProjectCreateSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(({ payload }) => {
            const { result } = payload;
            const encryptedID = this.authService.encrypt(result.id.toString());
            this.store.dispatch(showLoaderCancel());
            this.router.navigate([`${Urls.project}`, encryptedID]);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.CREATE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _putProjectTaskUpdate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.UPDATE),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { id, data } = payload;
        return this.projectService.update(id, data).pipe(
          map((data) => {
            this.store.dispatch(showSnackbar(data.message));
            return putProjectUpdateSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
            this.location.back();
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.UPDATE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _deleteProjectTaskDelete = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectType.DELETE),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { id } = payload;
        return this.projectService.delete(id).pipe(
          map((data) => {
            this.store.dispatch(showSnackbar(data?.message));
            this.store.dispatch(getProjectList(this.params));
            return deleteProjectDeleteSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectType.DELETE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
