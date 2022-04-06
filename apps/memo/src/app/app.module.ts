import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
    {
        path:'',
        pathMatch: 'full',
        component: NxWelcomeComponent
    },
    {
        path:'shell',
        pathMatch: 'full',
        loadChildren: () => import('@memo-worspace/shell').then(m => m.ShellModule)
    },
]

@NgModule({
  declarations: [AppComponent,NxWelcomeComponent ],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
