import { Injectable } from '@angular/core';
import { createTestCustomers } from '../test-data';
import { LoggerService } from './logger.service';
import { Customer } from '../model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';



// L'annotation injectable signifie qu'il y'a des choses à injecter
@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }


    getCustomersByPromise(): Promise<Customer[]> {
        this.loggerService.log('Getting customers as a promise ...');
        const customers = createTestCustomers();

        // Asynchronism avec Promise
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.loggerService.log("Loading " + customers.length + " customers !!");
                resolve(customers);
            }, 1500)
        });


    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log('Getting customers as an Observable ...');
        const customers = createTestCustomers();

        return of(customers)
            .delay(1500)
            .do(() => { this.loggerService.log("Loading " + customers.length + " customers !!"); });
    }

}