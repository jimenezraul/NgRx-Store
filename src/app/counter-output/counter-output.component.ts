import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

import { selectCounter } from '../store/counter.selector';
import type { Counter } from './counter.type';
import { init } from '../store/counter.action';

@Component({
  selector: 'app-counter-output',
  providers: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<Counter>) {
    this.count$ = store.select(selectCounter);
  }
}
