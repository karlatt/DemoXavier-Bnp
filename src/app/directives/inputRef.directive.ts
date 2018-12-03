import { Directive, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[inputRef]'
})
export class InputRefDirective {


  focus = false;

  @HostListener('focus')
  onFocus() { this.focus = true; }
  @HostListener('blur')
  onBlur() { this.focus = false; }
}
