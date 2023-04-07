import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective {
  constructor(elementRef: ElementRef) {}
}
