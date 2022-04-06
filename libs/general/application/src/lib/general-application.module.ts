import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  GENERAL_FEATURE_KEY,
  initialState as generalInitialState,
  generalReducer,
} from './+state/general.reducer';
import { GeneralEffects } from './+state/general.effects';
import { GeneralFacade } from './+state/general.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(GENERAL_FEATURE_KEY, generalReducer, {
      initialState: generalInitialState,
    }),
    EffectsModule.forFeature([GeneralEffects]),
  ],
  providers: [GeneralFacade],
})
export class GeneralApplicationModule {}
