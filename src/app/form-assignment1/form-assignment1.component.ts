import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-assignment1',
  templateUrl: './form-assignment1.component.html',
  styleUrls: ['./form-assignment1.component.css']
})
export class FormAssignment1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(x)
  {
    console.log(x);
  }

  submit(form){
    console.log(form);
  }
}
