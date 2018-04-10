import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { priceValidator } from './custom.validator'; 

@Component({
  selector: 'app-form-reactive-assignment',
  templateUrl: './form-reactive-assignment.component.html',
  styleUrls: ['./form-reactive-assignment.component.css']
})
export class FormReactiveAssignmentComponent implements OnInit {

  isSubmit=false;
  form: FormGroup;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      productCode:['',[Validators.required, Validators.pattern("^[a-zA-Z].*$"), Validators.minLength(5), Validators.maxLength(5)]],
      productName:['',Validators.required],
      price:['', Validators.min(1)],
      isDiscounted:''
    },{
      //This is a form level validator
      
    })
  }

  ngOnInit() {
  }
  submit(){
    console.log(this.form.value);
    this.isSubmit = true;
  }
  get productCode(){
    return this.form.get('productCode');
  }

  get productName(){
    return this.form.get('productName');
  }

  get price(){
    return this.form.get('price');
  }
  
}
