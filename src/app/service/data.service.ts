import { Injectable } from '@angular/core';
import { createTestCustomers } from '../test-data';
import { LoggerService } from './logger.service';


// L'annotation injectable signifie qu'il y'a des choses à injecter
@Injectable()
export class DataService {

    constructor(private loggerService : LoggerService) { }


    getCustomers()
    {

        const customers = createTestCustomers();
        this.loggerService.log("Loading " + customers.length + " customers !!");
        return customers;
    }
}