import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgrxModule } from '@memo-worspace/store';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@memo-worspace/general-feature').then(m => m.GeneralModule)
    }
]


@NgModule({
    imports: [ CommonModule,NgrxModule, RouterModule.forChild(routes) ],
})
export class ShellModule {
}
