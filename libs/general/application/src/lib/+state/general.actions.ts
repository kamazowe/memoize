import { createAction, props } from '@ngrx/store';
import { GeneralObject } from './generalObject';
import { Basic } from './basic';

export enum Types {
  updateObject = '[[general]] Object',
  updateBasic = '[[general]] Basic',
  updateObjectOnlyTest1 = '[[general]] Object Only Test1',
  updateObjectOnlyTest2 = '[[general]] Object Only Test2',
}

const updateObject = createAction(
  Types.updateObject,
  props<{ payload: GeneralObject }>()
);

const updateBasic = createAction(
  Types.updateBasic,
  props<{ payload: Basic }>()
);

const updateObjectOnlyTest1 = createAction(
    Types.updateObjectOnlyTest1,
    props<{ payload: GeneralObject['test1'] }>()
);

const updateObjectOnlyTest2 = createAction(
    Types.updateObjectOnlyTest2,
    props<{ payload: GeneralObject['test2'] }>()
);



export const generalActions = {
  updateBasic,
  updateObject,
    updateObjectOnlyTest1,
    updateObjectOnlyTest2
};

