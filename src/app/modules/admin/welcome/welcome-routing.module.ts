import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { WelcomeResolver } from './welcome.resolver';

const routes: Routes =  [
  {
      path     : '',
      component: WelcomeComponent,
      resolve  : {
          categories: WelcomeResolver
      },
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
