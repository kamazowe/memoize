import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GENERAL_FEATURE_KEY, GeneralState } from './general.reducer';

// Lookup the 'General' feature state managed by NgRx
const getGeneralState =
  createFeatureSelector<GeneralState>(GENERAL_FEATURE_KEY);

export const generalQuery = {};
