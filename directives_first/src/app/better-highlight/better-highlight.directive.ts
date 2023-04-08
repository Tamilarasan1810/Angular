import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }
  @HostBinding('style.backgroundColor') 'backgroundColor': string =
    'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle( this.elementRef.nativeElement,'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent' );
    this.backgroundColor = 'transparent';
  }
}
