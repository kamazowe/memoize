import { createReducer, on } from '@ngrx/store';
import { GeneralObject } from './generalObject';
import { generalActions } from './general.actions';
import { Basic } from './basic';

export const GENERAL_FEATURE_KEY = 'general';


export interface GeneralState {

    basic: Basic | null
    object: GeneralObject | null

}

export interface GeneralPartialState {
    readonly [GENERAL_FEATURE_KEY]: GeneralState;
}

export const initialState: GeneralState = {
    basic: null,
    object: null,
};

export const generalReducer = createReducer(initialState,
    on(generalActions.updateObject,(state,{payload})=> {
        console.log('updateObject',payload)
        return {
            ...state,
            object: payload
        }

    }),
    on(generalActions.updateBasic,(state,{payload})=> {
        console.log('updateBasic',payload)
        return {
            ...state,
            basic: payload
        }

    })
);
