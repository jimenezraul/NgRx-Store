import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => {
        if (state === 0) {
            return state;
        }
        return state - 1;
    })
)
