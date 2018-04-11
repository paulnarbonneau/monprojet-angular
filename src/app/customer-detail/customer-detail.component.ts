import { Component, Input } from '@angular/core';

import { Customer } from '../model';

@Component({
  // A renseigner pour dire que la resolution d'url est relative à ce module
  moduleId : module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls : ['customer-detail.component.css']
})
export class CustomerDetailComponent  { 
  
  //image = 'favicon.ico';
  //color = 'blue';
  
  
  showAddress = true;

 

// va planter dans un premier temps si il n'est pas initialisé, il faut faire un ngIf pour verifier qu'il est initialisé
// La notation Input sert à montrer que la propriete peut etre settée dans la balise html appelant ce composant
@Input() customer : Customer ;// = this.customers[0];
  
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
  addressClick() { this.showAddress = !this.showAddress ;}
  //regionChanged(region : string) { this.customer.address.region = region;}
  //nameChanged(name : string) { this.customer.name = name;}

}
