import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Input() ignoreElementRefs: ElementRef[] = [];
  @Output() clickOutside = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])

  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }


    const isClickedInsideIgnoredElement = this.ignoreElementRefs.some((ignoredRef) => {
      return ignoredRef.nativeElement.contains(targetElement);
    });

    if (isClickedInsideIgnoredElement || this.elementRef.nativeElement.contains(targetElement)) {
      return;
    }


    this.clickOutside.emit(event);
  }
}
