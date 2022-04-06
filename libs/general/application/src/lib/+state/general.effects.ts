import { Injectable } from '@angular/core';
import * as fromGeneralActions from './general.actions';
import { GeneralPartialState } from './general.reducer';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class GeneralEffects {
  constructor(private actions$: Actions) {}
}
