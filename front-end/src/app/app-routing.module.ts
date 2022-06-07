import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './komponente/home/home.component';
import { TimAddComponent } from './komponente/tim-add/tim-add.component';
import { TimoviComponent } from './komponente/timovi/timovi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'timovi', component: TimoviComponent },
  { path: 'timAdd', component: TimAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
