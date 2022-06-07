import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavbarComponent } from './komponente/navbar/navbar.component';
import { HomeComponent } from './komponente/home/home.component';
import { TimoviComponent } from './komponente/timovi/timovi.component';
import { HttpClientModule } from '@angular/common/http';
import { TimAddComponent } from './komponente/tim-add/tim-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TakmicenjaComponent } from './komponente/takmicenja/takmicenja.component';
import { TakmicenjeAddComponent } from './komponente/takmicenje-add/takmicenje-add.component';
import { TakmicenjeItemComponent } from './komponente/takmicenje-item/takmicenje-item.component';
import { GeneracijaUtakmicaComponent } from './komponente/generacija-utakmica/generacija-utakmica.component';
import { DodavanjeTimovaUTakmicenjeComponent } from './komponente/dodavanje-timova-utakmicenje/dodavanje-timova-utakmicenje.component';
import { UtakmiceComponent } from './komponente/utakmice/utakmice.component';
import { TimItemComponent } from './komponente/tim-item/tim-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TimoviComponent,
    TimAddComponent,
    TakmicenjaComponent,
    TakmicenjeAddComponent,
    TakmicenjeItemComponent,
    GeneracijaUtakmicaComponent,
    DodavanjeTimovaUTakmicenjeComponent,
    UtakmiceComponent,
    TimItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
