import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { notificationErrorDialog, notificationSuccessDialog } from '../dialog/dialog.action';
import { Store } from '@ngrx/store';
import { ProjectTaskType } from './task.type';
import { setDataTable } from '../datatable/datatable.action';
import { ProjectTaskTableHeads } from './task.state';
import { ProjectTask } from './task.model';
import { TaskService } from 'src/app/services/task/task.service';
import { deleteProjectTaskDeleteSuccess, getProjectTaskDetailsSuccess, getProjectTaskList, getProjectTaskListSuccess, postProjectTaskCreateSuccess, putProjectTaskUpdateSuccess } from './task.action';
import { Location } from '@angular/common';

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
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _getProjectTaskDetails = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.DETAILS),
      switchMap(({ payload }) => {
        const { project_id, id } = payload;
        return this.taskService.details(project_id, id).pipe(
          map((data) => {
            return getProjectTaskDetailsSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.DETAILS_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _postProjectTaskCreate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.CREATE),
      switchMap(({ payload }) => {
        const { project_id, data } = payload;
        return this.taskService.create(project_id, data).pipe(
          map((data) => {
            return postProjectTaskCreateSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.CREATE_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _putProjectTaskUpdate = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.UPDATE),
      switchMap(({ payload }) => {
        const { project_id, id, data } = payload;
        return this.taskService.update(project_id, id, data).pipe(
          map((data) => {
            this.store.dispatch(notificationSuccessDialog(data.message));
            return putProjectTaskUpdateSuccess(data);
          }),
          tap(() => {
            this.location.back();
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.UPDATE_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _deleteProjectTaskDelete = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectTaskType.DELETE),
      switchMap(({ payload }) => {
        const { project_id, id } = payload;
        return this.taskService.delete(project_id, id).pipe(
          map((data) => {
            this.store.dispatch(notificationSuccessDialog(data?.message));
            this.store.dispatch(getProjectTaskList({
              id: project_id,
              params: this.params
            }));
            return deleteProjectTaskDeleteSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(ProjectTaskType.DELETE_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
}
