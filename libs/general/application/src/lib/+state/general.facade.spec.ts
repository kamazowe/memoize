import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { Observable } from 'rxjs';
import { GeneralFacade } from './general.facade';
import * as fromGeneralActions from './general.actions';

describe('GeneralFacade', () => {
  let actions: Observable<any>;
  let facade: GeneralFacade;
  let store: MockStore;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [],
        providers: [
          GeneralFacade,
          provideMockStore(),
          provideMockActions(() => actions),
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), CustomFeatureModule],
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });
      facade = TestBed.inject(GeneralFacade);
      store = TestBed.inject(MockStore);
      jest.spyOn(store, 'dispatch');
    });
  });
});
