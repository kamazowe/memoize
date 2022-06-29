import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
          // todo
        metaReducers: true ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    // todo
      true ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class NgrxModule {}
