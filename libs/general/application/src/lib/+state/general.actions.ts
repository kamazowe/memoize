import { createAction, props } from '@ngrx/store';
import { GeneralObject } from './generalObject';
import { Basic } from './basic';

export enum Types {
    updateObject = '[[general]] Object',
    updateBasic = '[[general]] Basic',
}

const updateObject = createAction(
    Types.updateObject,
    props<{ payload: GeneralObject }>()
);

const updateBasic = createAction(
    Types.updateBasic,
    props<{ payload: Basic }>()
);


export const generalActions = {
    updateBasic,
    updateObject
}
