import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { cold, hot } from 'jest-marbles';
import { GeneralEffects } from './general.effects';
import * as fromGeneralActions from './general.actions';

describe('GeneralEffects', () => {
  let actions: Observable<any>;
  let effects: GeneralEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GeneralEffects,
        provideMockActions(() => actions),
        provideMockStore({ initialState: {} }),
      ],
    });

    effects = TestBed.inject(GeneralEffects);
  });
});
