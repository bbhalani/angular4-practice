import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  title = 'Calculator';
  a = 0;
  b = 0;
  c = 0;
  constructor() { }

  ngOnInit() {
  }
  onKey(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  addition = function() {
     this.c = (this.a + this.b);
  };

  subtract = function() {
    this.c = (this.a - this.b);
  };

  multiply = function() {
    this.c = (this.a * this.b);
  };

  devide = function() {
    this.c = (this.a / this.b);
  };
}
