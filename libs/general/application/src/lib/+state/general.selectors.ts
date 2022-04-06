import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GENERAL_FEATURE_KEY, GeneralState } from './general.reducer';

// Lookup the 'General' feature state managed by NgRx
const getGeneralState =
  createFeatureSelector<GeneralState>(GENERAL_FEATURE_KEY);


const selectObject = createSelector(getGeneralState,state=> {
    // console.log('calc selector state.object')
    return state.object
})
const selectBacic = createSelector(getGeneralState,state=> {
    // console.log('calc selector state.basic')
    return state.basic
})

const selectObjectOnlyTest1 = createSelector(selectObject,object => {
    // console.log('calc selector object.test1')
    return object.test1
})

const selectObjectOnlyTest2 = createSelector(selectObject,object => {
    // console.log('calc selector object.test2')
    return object.test2
})

const selectObjectOnlyTest11 = createSelector(selectObjectOnlyTest1,object => {
    // console.log('calc selector object.test11')
    return object.test11
})

const selectObjectOnlyTest22 = createSelector(selectObjectOnlyTest2,object => {
    // console.log('calc selector object.test22')
    return object.test22
})



export const generalQuery = {
    selectObject,
    selectBacic,
    selectObjectOnlyTest1,
    selectObjectOnlyTest2,
    selectObjectOnlyTest11,
    selectObjectOnlyTest22
};
