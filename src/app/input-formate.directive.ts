import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormate]'
})
export class InputFormateDirective {
  @Input('Format') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: number = this.el.nativeElement.value;

    if (this.format == 'us-format')
      this.el.nativeElement.value = this.USFormat(this.el.nativeElement.value);
    else
      this.el.nativeElement.value = "";


  }

  USFormat(number) {
    var area = number.slice(0, 3);
    var front = number.slice(3, 6);
    var end = number.slice(6, 10);
    var formattedNumber = ("(" + area + ") " + front + "-" + end);

    return formattedNumber;
  }

}
