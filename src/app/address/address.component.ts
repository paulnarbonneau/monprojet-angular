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
    
    regions = ['West','Noth','East','South','Midwest'];

    states = ['California', 'Illinois','Quebec','Jalisco'];

  
}