import { Injectable } from '@angular/core';
import { createTestCustomers } from '../test-data';
import { LoggerService } from './logger.service';
import { Customer } from '../model';



// L'annotation injectable signifie qu'il y'a des choses à injecter
@Injectable()
export class DataService {

    constructor(private loggerService : LoggerService) { }


    getCustomersByPromise()
    {
        this.loggerService.log('Getting customers as a promise ...');
        const customers = createTestCustomers();
        
        // Asynchronism avec Promise
        return new Promise<Customer[]>(resolve => {
            setTimeout(() =>  {
                this.loggerService.log("Loading " + customers.length + " customers !!");
                resolve(customers);
            },1500)
        });


    }
}