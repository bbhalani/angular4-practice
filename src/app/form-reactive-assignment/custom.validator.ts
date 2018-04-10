import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

//This is a custom validator to check passwords. 
//The class can contain multiple methods for validation.
//The following class has just one validation method. 

export class priceValidator {
    static priceMinimum(control:AbstractControl){
        
            let price = control.get('price');
            if(price.value != ''){
            if (price.value <= 0){
                return { priceMinimum: true };
            }
            return null;
        }
    }
}