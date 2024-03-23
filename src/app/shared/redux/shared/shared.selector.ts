import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Shared } from "./shared.model";

const sharedState = createFeatureSelector<Shared>('shared');

export const selectSelectOptions = createSelector(sharedState, (state: Shared) => state.select_options);
export const selectShowLoader = createSelector(sharedState, (state: Shared) => state.show_loader);
export const selectPrompt = createSelector(sharedState, (state: Shared) => state.snackbar_message);
