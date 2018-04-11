import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    public log(str : string){
        console.log(str);
    }
}