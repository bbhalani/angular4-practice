import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  

  
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      customerName: ['',Validators.required],
      orderNo: ['',[Validators.required, Validators.pattern("^[A-Z]*"), Validators.minLength(5), Validators.maxLength(5)]],
      date: [],
      orderTotal: [],
      items: this.fb.array([this.deatailRecords()])
    })

  }

  ngOnInit() {
  }

  

  deatailRecords(): FormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      price: ['', Validators.min(1)],
      qty: ['',Validators.min(1)],
      total: [''] 
    });
  }


  
 


  

  get itemName(){
    return this.items.get('itemName');
  }
  get qty(){
    return this.items.get('qty');
  }
  
  get price(){
    return this.items.get('price');
  }


  get items(): FormArray{
    return <FormArray>this.form.get('items');
  }

  addItem(): void {
    this.items.push(this.deatailRecords());
  }
  removeItem(index:number): void {
    this.items.removeAt(index);
  }
  setTotal(i:number){
    let tempPrice = this.items.at(i).get('price').value;
    let tempQty = this.items.at(i).get('qty').value;
    if(tempPrice>0 && tempQty>0){
      let tempTotal = tempPrice*tempQty;
      return this.items.at(i).patchValue({total: tempTotal});
    }

  }
  setOrderTotal(){
   let tempOrderTotal = 0;
   for(var i=0;i<this.items.length;i++){
    tempOrderTotal = tempOrderTotal+(this.items.at(i).get('total').value);
    
   }
   console.log(tempOrderTotal);
   return this.form.patchValue({orderTotal: tempOrderTotal});
  }
  signUp() {
    console.log(JSON.stringify(this.form.value));
  }
  get customerName(){
    return this.form.get('customerName');
  }

  get orderNo(){
    return this.form.get('orderNo');
  }
  
  get date(){
    return this.form.get('date');
  }
}
