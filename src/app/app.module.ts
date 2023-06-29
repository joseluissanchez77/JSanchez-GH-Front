import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveComponent } from './component/person/save/save.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './component/person/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from "@angular/common/locales/es";
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
