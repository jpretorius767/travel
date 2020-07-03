import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[bodyClick]'
})
export class BodyClickDirective {
  @Output() clickElsewhere = new EventEmitter<MouseEvent>(); 
 
  constructor(private elementRef: ElementRef) {}
 
  @HostListener('body:click', ['$event'])
  public onBodyClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
 
      // Check if the click was outside the element
      if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
 
         this.clickElsewhere.emit(event);
      }
  }
}
