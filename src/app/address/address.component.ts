import { Component, Input } from '@angular/core';

import { Customer, Address } from '../model';

@Component({
  // A renseigner pour dire que la resolution d'url est relative à ce module
  moduleId : module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls : ['address.component.css']
})
export class AddressComponent  { 


    @Input() address : Address;

    showAddress = true;
    
    regions = ['West','Noth','East','South','Midwest'];

    states = ['California', 'Illinois','Quebec','Jalisco'];

      //clicked(){ this.color = this.color === 'red' ? 'blue' :'red' ;}
  //changeColor(color : string){ this.color = color;}
  addressClick() { this.showAddress = !this.showAddress ;}
  //regionChanged(region : string) { this.customer.address.region = region;}
  //nameChanged(name : string) { this.customer.name = name;}
}