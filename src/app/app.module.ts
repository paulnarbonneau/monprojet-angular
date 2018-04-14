import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AddressComponent } from './address/address.component';
import { DataService } from './service/data.service';
import { LoggerService } from './service/logger.service';
// Test avec données bidon
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';




// decorator qui sert de metadata pour décrire la classe 
@NgModule({
  imports: [BrowserModule, FormsModule,HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)], // de quoi j'ai besoin
  declarations: [AppComponent, CustomerListComponent, CustomerDetailComponent, AddressComponent], // de quoi est composée mon app
  providers: [DataService, LoggerService], // services dont j'ai besoin
  bootstrap: [AppComponent] // ou je demarre
})
export class AppModule { }
