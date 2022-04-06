import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GeneralPartialState } from './general.reducer';
import { generalQuery } from './general.selectors';
import * as fromGeneralActions from './general.actions';

@Injectable()
export class GeneralFacade {
  constructor(private store: Store<GeneralPartialState>) {}
}
