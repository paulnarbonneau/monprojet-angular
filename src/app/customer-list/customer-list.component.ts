import { Component, OnInit } from '@angular/core';

import { Customer } from '../model';
import { DataService } from '../service/data.service';
import { LoggerService } from '../service/logger.service';


@Component({
  // A renseigner pour dire que la resolution d'url est relative à ce module
  moduleId : module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls : ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit { 


  constructor(private dataService : DataService, private loggerService : LoggerService){}

  //Cycle de vie du composant commence ici
  ngOnInit(){

    this.loggerService.log("Getting customers ...");
    this.customers = this.dataService.getCustomers();
  }
  
  //image = 'favicon.ico';
  //color = 'blue';
  
  showAddress = false;

  regions = ['West','Noth','East','South','Midwest'];

  states = ['California', 'Illinois','Quebec','Jalisco']

  customers: Customer[] = [
    
];

// va planter dans un premier temps si il n'est pas initialisé, il faut faire un ngIf pour verifier qu'il est initialisé
customer : Customer ;// = this.customers[0];
  
  // On peut utiliser une notation java avec new + constructeur 
  // customer : Customer = new Customer();
  // On peut utiliser la notation JSON pour construire l'objet
  /*
  customer : Customer = {
    id : 1,
    name : 'Paul Narbonneau',
    address : { 
      street : 'Ile Marante',
      city : 'Colombes',      
      region : 'Ouest',
      state : 'France'
    }
  };
*/
  //clicked(){ this.color = this.color === 'red' ? 'blue' :'red' ;}
  //changeColor(color : string){ this.color = color;}
  addressClick() { this.showAddress = this.showAddress ;}
  //regionChanged(region : string) { this.customer.address.region = region;}
  //nameChanged(name : string) { this.customer.name = name;}


  shift(increment : number)
  {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length -1 , Math.max(0,ix));
    this.customer = this.customers[ix];
  }
}
