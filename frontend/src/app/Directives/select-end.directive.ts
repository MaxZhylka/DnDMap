import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectEnd]'
})
export class SelectableDirective {
  @Output() selectionDone: EventEmitter<Selection> = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    this.emitSelection();
  }


  private emitSelection() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0 && this.el.nativeElement.contains(selection.anchorNode)) {
      this.selectionDone.emit(selection);
    }
  }
}
