import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddressComponent } from './address/address.component';

// decorator qui sert de metadata pour décrire la classe 
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // de quoi j'ai besoin
  declarations: [ AppComponent, CustomerListComponent, CustomerDetailComponent, AddressComponent ], // de quoi est composée mon app
  bootstrap:    [ AppComponent ] // ou je demarre
})
export class AppModule { }
