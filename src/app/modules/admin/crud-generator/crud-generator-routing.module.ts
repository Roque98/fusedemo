import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudGeneratorComponent } from './crud-generator.component';
import { ListarCrudsComponent } from './listar-cruds/listar-cruds.component';

const routes: Routes = [
  {
    path: 'listar/:idCrud',
    component: ListarCrudsComponent,
    resolve: {
      // categories: GroupResolver
    },
  },
  {
    path: 'usarCrud/:idCrud',
    component: CrudGeneratorComponent,
    resolve: {
      // categories: GroupResolver
    },
  },
  {
    path: '',
    redirectTo: 'listar/1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudGeneratorRoutingModule { }
