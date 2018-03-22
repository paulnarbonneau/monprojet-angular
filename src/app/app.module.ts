import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// decorator qui sert de metadata pour décrire la classe 
@NgModule({
  imports:      [ BrowserModule ], // de quoi j'ai besoin
  declarations: [ AppComponent ], // de quoi est composée mon app
  bootstrap:    [ AppComponent ] // ou je demarre
})
export class AppModule { }
