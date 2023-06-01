import * as React from 'react';
import { useEffect } from 'react';
import {
  createAction,
  createEffectFn,
  createEffect,
  ofType,
  dispatch,
} from '@ngneat/effects';
import { Observable, timer } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  tap,
  switchMap,
  mapTo,
} from 'rxjs/operators';
import { useEffectFn, useEffects } from '@ngneat/effects-hooks';

const addTodoEffect = createEffectFn((value$: Observable<string>) =>
  value$.pipe(debounceTime(300), distinctUntilChanged(), tap(console.log))
);

const loadTodos = createAction('[Todos] Load Todos');

const loadTodos$ = createEffect((actions$) =>
  actions$.pipe(
    ofType(loadTodos),
    switchMap((v) => timer(1000).pipe(mapTo([{ id: 1 }]))),
    tap(console.log)
  )
);

export function Hello() {
  useEffects(loadTodos$);

  const addTodo = useEffectFn(addTodoEffect);

  useEffect(() => dispatch(loadTodos()), []);

  return <input onChange={(e) => addTodo(e.target.value)} />;
}
