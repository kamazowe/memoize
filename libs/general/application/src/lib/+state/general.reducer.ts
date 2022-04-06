import { createReducer, on } from '@ngrx/store';
import { GeneralObject } from './generalObject';
import { generalActions } from './general.actions';
import { Basic } from './basic';

export const GENERAL_FEATURE_KEY = 'general';


export interface GeneralState {

    basic: Basic
    object: GeneralObject

}

export interface GeneralPartialState {
    readonly [GENERAL_FEATURE_KEY]: GeneralState;
}

export const initialState: GeneralState = {
    basic: 'initial',
    object: {
        test1: {
            test11: 'initial'
        },
        test2: {
            test22: 'initial'
        }
    },
};

export const generalReducer = createReducer(initialState,
    on(generalActions.updateObject,(state,{payload})=> {
        // console.log('updateObject',payload)
        return {
            ...state,
            object: payload
        }

    }),
    on(generalActions.updateBasic,(state,{payload})=> {
        // console.log('updateBasic',payload)
        return {
            ...state,
            basic: payload
        }
    }),
    on(generalActions.updateObjectOnlyTest1,(state,{payload})=> {
        // console.log('updateObject test 1',payload)
        return {
        ...state,
                object: {
            ...state.object,
                    test2: {...state.object.test2},
                    test1: payload
            }
        }

    }),
    on(generalActions.updateObjectOnlyTest2,(state,{payload})=> {
        // console.log('updateObject test 2',payload)
        return {
            ...state,
            object: {
                ...state.object,
                test1: {...state.object.test1},
                test2:payload
            }
        }
    }),
);
