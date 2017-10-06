import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[CheckingDirective]'
})

export class CheckingDirective {
  private element: HTMLElement;

  constructor(ele: ElementRef) {
    this.element = ele.nativeElement;
    this.element.style.fontSize = '40px';
    console.log(this.element);
  }
}

@Directive({
  selector: '[SampleDirective]'
})

export class SampleDirective {
  private element: HTMLElement;

  constructor(ele: ElementRef) {
    this.element = ele.nativeElement;
    this.element.style.fontSize = '10px';
    console.log(this.element);
  }
}

