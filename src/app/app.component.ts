import { Component } from '@angular/core';

@Component({
  selector: 'mon-app',
  template: `<h1>Hello {{name}}</h1>
              <fieldset>
                <img [src]="image"/>
              </fieldset>
              <label [style.color] = "color">Couleur préférée : </label>
              <br/>
              <button (click)="clicked()">Changer Couleur</button>
              <!-- Methode possible avec le #selector
              <select #selector (change)="changeColor(selector.value)" >
              -->
              <select (change)="changeColor($event.target.value)" >
                <option>red</option>
                <option>purple</option>
                <option>blue</option>
                <option>green</option>
              </select>
              <br/>
              <button (click)="adressClick()">Afficher/cacher Adresse</button>
              <div [hidden]="hideAdress">
              <fieldset>
                <label [style.color] = "color">Adresse : {{street}}</label>
                </fieldset>
                <fieldset>
                <label [style.color] = "color">Ville : {{city}}</label>
                </fieldset>
              </div>
              <select (change)="regionChanged($event.target.value)">
                <option>Est</option>
                <option>Ouest</option>
                <option>Nord</option>
                <option>Sud</option>
              </select>
              <p>
                {{name}} est dans la région {{region}}
              </p>
  `,
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
}
