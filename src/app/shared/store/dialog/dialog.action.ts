import { createAction } from "@ngrx/store";
import { DialogType } from "./dialog.type";

export const notificationErrorDialog = createAction(
    DialogType.NOTIFICATION_ERROR_DIALOG,
    (payload: any) => ({
        payload,
    })
);

export const notificationSuccessDialog = createAction(
    DialogType.NOTIFICATION_SUCCESS_DIALOG,
    (payload: any) => ({
        payload,
    })
);