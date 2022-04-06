import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralApplicationModule } from '@memo-worspace/general/application';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { FormsModule } from '@angular/forms';


const routes:Routes = [{
    path:'',
    component:GeneralComponent
}]

@NgModule({
  imports: [CommonModule,FormsModule, RouterModule.forChild(routes),GeneralApplicationModule],
  declarations: [
    GeneralComponent
  ],
})
export class GeneralModule {}
