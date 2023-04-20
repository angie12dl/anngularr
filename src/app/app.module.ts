import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomePagesComponent } from './home-pages/home-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    BusquedaComponent,
    HomePagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
