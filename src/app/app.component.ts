import { Component } from '@angular/core';

@Component({
  selector: 'mon-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
  
  name = 'Paul Narbonneau'; 
  image = 'favicon.ico';
  color = 'blue';

  street = 'Ile Marante';
  city = 'Colombes';
  region = 'France';
  hideAdress = false;

  clicked(){ this.color = this.color === 'red' ? 'blue' :'red' ;}
  changeColor(color : string){ this.color = color;}
  adressClick() { this.hideAdress = !this.hideAdress ;}
  regionChanged(region : string) { this.region = region;}
  nameChanged(name : string) { this.name = name;}
}
