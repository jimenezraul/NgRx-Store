import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.action";
import { switchMap, tap, withLatestFrom } from "rxjs/operators";
import { selectCounter } from "./counter.selector";
import { Store } from "@ngrx/store";
import { of } from "rxjs";

@Injectable()
export class CounterEffects {
    COUNT = 'count'
    loadCount = createEffect(
        () =>
            this.actions$.pipe(
                ofType(init),
                switchMap(() => {
                    const counter = localStorage.getItem(this.COUNT);

                    if (counter) {
                        return of(set({ value: +counter }))
                    }
                    return of(set({ value: 0 }))
                })
            ),
    )

    saveCount = createEffect(
        () =>
            this.actions$.pipe(
                ofType(increment, decrement),
                withLatestFrom(this.store.select(selectCounter)),
                tap(([action, counter]) => {
                    localStorage.setItem(this.COUNT, JSON.stringify(counter));
                })
            ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private store: Store<{ counter: number }>) { }
}
