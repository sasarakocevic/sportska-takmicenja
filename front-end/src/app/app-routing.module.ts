import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './komponente/home/home.component';
import { TakmicenjaComponent } from './komponente/takmicenja/takmicenja.component';
import { TakmicenjeAddComponent } from './komponente/takmicenje-add/takmicenje-add.component';
import { TimAddComponent } from './komponente/tim-add/tim-add.component';
import { TimoviComponent } from './komponente/timovi/timovi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'timovi', component: TimoviComponent },
  { path: 'timAdd', component: TimAddComponent },
  { path: 'takmicenja', component: TakmicenjaComponent },
  { path: 'takmicenjeAdd', component: TakmicenjeAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
