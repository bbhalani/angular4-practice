import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { XfinityData } from './xfinity-data';
import { XfinityServiceService } from './xfinity-service.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-xfinity-challenge',
  templateUrl: './xfinity-challenge.component.html',
  styleUrls: ['./xfinity-challenge.component.css']
})
export class XfinityChallengeComponent implements OnInit {
  
  constructor(private xfinityService: XfinityServiceService, private route: ActivatedRoute) { }
  
  xfinitydata: XfinityData[];
  record: XfinityData;
  isDesc: boolean = false;
  column: string = 'amount';
  direction: number;
  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.xfinityService.getAllData() 
    .subscribe(xfinitydata => {
      this.xfinitydata = xfinitydata;
    }, (error) => {console.log(error); },
    () => {console.log(this.xfinitydata); });
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
  
}
