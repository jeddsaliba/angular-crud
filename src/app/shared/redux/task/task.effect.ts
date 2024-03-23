import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProjectTaskType } from './task.type';
import { setDataTable } from '../datatable/datatable.action';
import { ProjectTaskTableHeads } from './task.state';
import { ProjectTask } from './task.model';
import { deleteProjectTaskDeleteSuccess, getProjectTaskDetailsSuccess, getProjectTaskList, getProjectTaskListSuccess, postProjectTaskCreateSuccess, putProjectTaskUpdateSuccess } from './task.action';
import { Location } from '@angular/common';
import { TaskService } from '@shared/services/task/task.service';
import { showLoader, showLoaderCancel, showSnackbar } from '../shared/shared.action';
import { environment } from '@environments/environment';

@Injectable()
export class ProjectTaskEffect {
  params: any = {
    page: 1,
    limit: 10,
    sort: 'id',
    direction: 'asc'
  };
  constructor(
    private taskService: TaskService,
    private actions$: Actions,
    private store: Store<ProjectTask>,
    private location: Location
  ) {}
  _getProjectTaskList = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.LIST),
      switchMap(({ payload }) => {
        const { params } = payload;
        this.params = params;
        return this.taskService.list(payload).pipe(
          map((data) => {
            const { result } = data;
            this.store.dispatch(
              setDataTable({
                ...result,
                table_heads: ProjectTaskTableHeads,
                params: params,
                message: data.message,
              })
            );
            return getProjectTaskListSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.LIST_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _getProjectTaskDetails = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.DETAILS),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { project_id, id } = payload;
        return this.taskService.details(project_id, id).pipe(
          map((data) => {
            return getProjectTaskDetailsSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.DETAILS_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _postProjectTaskCreate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.CREATE),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { project_id, data } = payload;
        return this.taskService.create(project_id, data).pipe(
          map((data) => {
            this.store.dispatch(showSnackbar(data.message));
            return postProjectTaskCreateSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
            this.location.back();
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.CREATE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _putProjectTaskUpdate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.UPDATE),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { project_id, id, data } = payload;
        return this.taskService.update(project_id, id, data).pipe(
          map((data) => {
            this.store.dispatch(showSnackbar(data.message));
            return putProjectTaskUpdateSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
            this.location.back();
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.UPDATE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _deleteProjectTaskDelete = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.DELETE),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        const { project_id, id } = payload;
        return this.taskService.delete(project_id, id).pipe(
          map((data) => {
            this.store.dispatch(showSnackbar(data?.message));
            this.store.dispatch(getProjectTaskList({
              id: project_id,
              params: this.params
            }));
            return deleteProjectTaskDeleteSuccess(data);
          }),
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.DELETE_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
