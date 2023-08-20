import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvailabilityColor]',
})
export class AvailabilityColorDirective implements OnInit {
  @Input() isAvailable: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.setBackgroundColor();
  }

  setBackgroundColor() {
    if (this.isAvailable === true) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'green'
      );
    } else if (this.isAvailable === false) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
  }
}
