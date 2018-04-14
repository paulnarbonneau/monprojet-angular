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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { promise } from 'selenium-webdriver';



// L'annotation injectable signifie qu'il y'a des choses à injecter
@Injectable()
export class DataService {

    private customersUrl = 'api/customers';
    private regionsUrl = "api/regions";
    private statesUrl = "api/states";

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
                this.loggerService.log(`Loading ${custs.length} customers !!`);
                return custs;
            },
        error => { 
            this.loggerService.log(`error occured : ${error}`);
            return Promise.reject('Quelquechose de bad est arrivé, veuillez regarder la console');
    });
        


    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log('Getting customers as an Observable via HTTP...');

        return this.http.get(this.customersUrl)
        .map( response => response.json().data as Customer[])
        .do((custs) => { 
            this.loggerService.log(`Loading ${custs.length} customers !!`); 
        })
        .catch((error :any) => {
            this.loggerService.log(`error occured : ${error}`);
            return Observable.throw('Quelquechose de bad est arrivé en recupérant les customers, veuillez regarder la console');
        });
    }

    getRegions():Observable<string[]>{
        this.loggerService.log('Getting regions as an Observable via HTTP...');

        return this.http.get(this.regionsUrl)
        .map( response => response.json().data as string[])
        .do((regs) => { 
            this.loggerService.log(`Loading ${regs.length} regions !!`); 
        })
        .catch((error :any) => {
            this.loggerService.log(`error occured : ${error}`);
            return Observable.throw('Quelquechose de bad est arrivé en recupérant les régions, veuillez regarder la console');
        });
    }

    getStates():Observable<string[]>{
        this.loggerService.log('Getting states as an Observable via HTTP...');

        return this.http.get(this.statesUrl)
        .map( response => response.json().data as string[])
        .do((stats) => { 
            this.loggerService.log(`Loading ${stats.length} states !!`); 
        })
        .catch((error :any) => {
            this.loggerService.log(`error occured : ${error}`);
            return Observable.throw('Quelquechose de bad est arrivé en recupérant les états, veuillez regarder la console');
        });;
    }

}