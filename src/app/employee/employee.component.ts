import { Component, OnInit, HostListener, Input } from '@angular/core';
import { EmployeeService } from '/Users/bhavi/Desktop/training/angular/assignment/src/app/employee.service';
import { Employee } from './employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService, private orderPipe: OrderPipe, private route: ActivatedRoute) { 
    this.filteredEmployees = orderPipe.transform(this.filteredEmployees, 'filteredEmployees.firstName');
  }
  
  employees: Employee[];
  filteredEmployees: Employee[];
  employee: Employee;
  search = '';
  order = 'firstName';
  reverse = false;
  p = 1;
  
  
  ngOnInit() {
    this.getAllEmployees();
  }
  onKey(search: string) {
    this.search = search;
  }
  filterEmployees(){
    if(!this.search) { 
      return this.filteredEmployees = this.employees;
    } //when nothing has typed
    else{
      return this.filteredEmployees = this.employees.filter(
        employees => ((employees.firstName.toLowerCase().indexOf(this.search.toLowerCase()) > -1) ||(employees.lastName.toLowerCase().indexOf(this.search.toLowerCase()) > -1) || employees.designation.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
      )
    }
  }
 
  getAllEmployees() {
    this.employeeService.getAllEmployees() 
    .subscribe(employees => {
      this.employees = employees;
      this.filteredEmployees = this.employees;
    }, (error) => {console.log(error); },
    () => {console.log(this.employees); });
  }
  
  getEmployeeDetails(id:number) {
    this.employeeService.getEmployeeDetails(id)
    .subscribe(employee => {this.employee = employee; },
      (error) => {console.log(error); },
      () => {console.log(this.employee); });
      // console.log(this.product);
    }
    setOrder(value: string) {
      if (this.order === value) {
        this.reverse = !this.reverse;
      }
  
      this.order = value;
    }
    
    
  }
