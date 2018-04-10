import { Component } from '@angular/core';

@Component({
    selector: 'app-name',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <customer-list></customer-list>
    `
})
export class AppComponent  {

    title = 'customer management';

}
