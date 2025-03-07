import { createAction, props } from "@ngrx/store";

export const INIT = '[Counter] Init'
export const SET = '[Counter] Set'
export const INCREMENT = '[Counter] Increment'
export const DECREMENT = '[Counter] Decrement'

export const init = createAction(INIT);
export const set = createAction(SET, props<{ value: number }>())
export const increment = createAction(INCREMENT, props<{ value: number }>());
export const decrement = createAction(DECREMENT, props<{ value: number }>());