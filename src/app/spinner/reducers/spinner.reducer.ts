import {createReducer, on} from '@ngrx/store';
import {activate, deactivate} from '../actions/spinner.action';

export const initialState = 0;

const _spinnerReducer = createReducer(
  initialState,
  on(activate, (state) => state + 1),
  on(deactivate, (state) => state - 1)
);

export function spinnerReducer(state: any, action: any): number {
  return _spinnerReducer(state, action);
}
