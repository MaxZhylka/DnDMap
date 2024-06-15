// clickable-links.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickableLinks]'
})
export class ClickableLinksDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
public onClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  const href = target.getAttribute('href');

  if (target.tagName.toLowerCase() === 'a' && href) {
    event.preventDefault();
    window.open(href, '_blank');
  }
}

}
