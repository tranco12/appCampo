import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaGastoComponent } from './components/alta-gasto/alta-gasto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'altaGasto', component: AltaGastoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
