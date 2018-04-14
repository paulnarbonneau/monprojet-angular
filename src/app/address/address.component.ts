import { Component, Input, Injectable, OnInit } from '@angular/core';

import { Customer, Address } from '../model';
import { DataService } from '../service/data.service';
import { LoggerService } from '../service/logger.service';

@Component({
  // A renseigner pour dire que la resolution d'url est relative à ce module
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})

@Injectable()
export class AddressComponent implements OnInit {

  ngOnInit(): void {
     this.dataService.getStates().subscribe(states => {this.states = states});
     this.dataService.getRegions().subscribe(regions => {this.regions = regions});
  }
  constructor(private dataService: DataService, private loggerService: LoggerService) { }

  @Input() address: Address;

  regions: string[];
states : string[];
 
}