import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { createTestCustomers } from '../test-data';
import { LoggerService } from './logger.service';
import { Customer } from '../model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { promise } from 'selenium-webdriver';



// L'annotation injectable signifie qu'il y'a des choses à injecter
@Injectable()
export class DataService {

    private customersUrl = 'api/customers';

    constructor(
        private loggerService: LoggerService,
        private http : Http
    ) { }


    getCustomersByPromise(): Promise<Customer[]> {
        this.loggerService.log('Getting customers as a promise ...');

        return this.http.get(this.customersUrl)
        .toPromise()
        .then( response => { 
                const custs = response.json().data as Customer[] ;
                this.loggerService.log("Loading ${custs.length} customers !!");
                return custs;
            },
        error => { this.loggerService.log("error occured : ${error}");
            return Promise.reject("Quelquechose de bad est arrivé, veuillez regarder la console");
    });
        // this.loggerService.log("Loading " + customers.length + " customers !!");

        // Asynchronism avec Promise
        // return new Promise<Customer[]>(resolve => {
        //     setTimeout(() => {
        //         this.loggerService.log("Loading " + customers.length + " customers !!");
        //         resolve(customers);
        //     }, 1500)
        // });


    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log('Getting customers as an Observable ...');
        const customers = createTestCustomers();

        return of(customers)
            .delay(1500)
            .do(() => { this.loggerService.log("Loading " + customers.length + " customers !!"); });
    }

}