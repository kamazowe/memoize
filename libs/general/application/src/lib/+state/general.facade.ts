import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeneralPartialState } from './general.reducer';
import { generalActions } from './general.actions';
import { GeneralObject } from './generalObject';
import { Basic } from './basic';
import { generalQuery } from './general.selectors';

@Injectable()
export class GeneralFacade {

    object = this.store.select(generalQuery.selectObject)
    basic = this.store.select(generalQuery.selectBacic)
    objectOnlyTest1 = this.store.select(generalQuery.selectObjectOnlyTest1)
    objectOnlyTest11 = this.store.select(generalQuery.selectObjectOnlyTest11)
    objectOnlyTest2 = this.store.select(generalQuery.selectObjectOnlyTest2)
    objectOnlyTest22 = this.store.select(generalQuery.selectObjectOnlyTest22)



    updateObject(payload: GeneralObject): void {
        console.log('-'.repeat(20) + 'updateObject')
        this.store.dispatch(generalActions.updateObject({payload}))
    }

    updateBasic(payload: Basic): void {
        console.log('-'.repeat(20) + 'updateBasic')
        this.store.dispatch(generalActions.updateBasic({payload}))
    }

    updateObjectOnlyTest1(payload: GeneralObject['test1']): void {
        console.log('-'.repeat(20) + 'updateObjectOnlyTest1')
        this.store.dispatch(generalActions.updateObjectOnlyTest1({payload}))
    }

    updateObjectOnlyTest2(payload: GeneralObject['test2']): void {
        console.log('-'.repeat(20) + 'updateObjectOnlyTest2')
        this.store.dispatch(generalActions.updateObjectOnlyTest2({payload}))
    }


    constructor(private store: Store<GeneralPartialState>) {
    }
}
