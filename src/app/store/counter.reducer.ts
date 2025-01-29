import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value),
    on(decrement, (state, action) => {
        if (state === 0) {
            return state;
        }
        return state - action.value
    }),
    on(set, (state, action) => action.value)
)
