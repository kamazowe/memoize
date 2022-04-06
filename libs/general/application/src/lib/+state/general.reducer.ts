import * as fromGeneralActions from './general.actions';
import { on, createReducer, ActionReducer } from '@ngrx/store';

export const GENERAL_FEATURE_KEY = 'general';

export interface GeneralState {



}

export interface GeneralPartialState {
  readonly [GENERAL_FEATURE_KEY]: GeneralState;
}

export const initialState: GeneralState = {};

export const generalReducer = createReducer(initialState);
