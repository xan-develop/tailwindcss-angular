import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridsComponent } from './grids/grids.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: 'grid' , component: GridsComponent},
  {path: 'form' , component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
