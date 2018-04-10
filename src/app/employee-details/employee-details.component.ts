import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '/Users/bhavi/Desktop/training/angular/assignment/src/app/employee.service'
import { Employee } from '/Users/bhavi/Desktop/training/angular/assignment/src/app/employee/employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { DisableControlDirective } from '/Users/bhavi/Desktop/training/angular/assignment/src/app/disable-control.directive';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  disable=true;
  form: FormGroup;
  
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,   private router: Router, private fb: FormBuilder) { 
    this.form = fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      designation: ['',Validators.required],
    })
  }
  employee: Employee;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    (this.getEmployeeDetails(+(id)));
  }
  getEmployeeDetails(id:number) {
    this.employeeService.getEmployeeDetails(id)
    .subscribe(employee => {this.employee = employee; },
      (error) => {console.log(error); },
      () => {console.log(this.employee); });
      // console.log(this.product);
    }
    
    get firstName(){
      return this.form.get('firstName');
    }
    get lastName(){
      return this.form.get('lastName');
    }
    get designation(){
      return this.form.get('designation');
    }
    get edit(){
      return this.form.get('Edit');
    }
    
    editDetails(){
      let firstName = this.form.get('firstName');
      let lastName = this.form.get('lastName');
      let designation = this.form.get('designation');
      firstName.disabled ? firstName.enable() : firstName.disable();
      lastName.disabled ? lastName.enable() : lastName.disable();
      designation.disabled ? designation.enable() : designation.disable();
    }
  }
  