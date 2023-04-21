import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group.component';
import { GroupResolver } from './group.resolver';

const routes: Routes =  [
  {
      path     : '',
      component: GroupComponent,
      resolve  : {
          categories: GroupResolver
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
