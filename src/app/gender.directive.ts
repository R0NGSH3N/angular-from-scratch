import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appGender]'
})
export class GenderDirective {
  @HostBinding("class.female-style") isFemale = false;
  @HostBinding("class.hovering-style") hover = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover = false;
  }

  @Input() set appGender(value) {
    console.log('value is ' + value);
    if (value === 'female') {
      this.isFemale = true;
    }
  }
}
