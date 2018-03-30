import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  selector: 'mon-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
  
  image = 'favicon.ico';
  color = 'blue';
  
  hideAdress = false;
  
  // On peut utiliser une notation java avec new + constructeur 
  // customer : Customer = new Customer();
  // On peut utiliser la notation JSON pour construire l'objet
  customer : Customer = {
    id : 1,
    name : 'Paul Narbonneau',
    adress : { 
      street : 'Ile Marante',
      city : 'Colombes',      
      region : 'Ouest',
      state : 'France'
    }
  };

  clicked(){ this.color = this.color === 'red' ? 'blue' :'red' ;}
  changeColor(color : string){ this.color = color;}
  adressClick() { this.hideAdress = !this.hideAdress ;}
  regionChanged(region : string) { this.customer.adress.region = region;}
  nameChanged(name : string) { this.customer.name = name;}
}
