import {Directive, HostListener, ElementRef, Renderer2, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appContentEditable]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContentEditableDirective),
      multi: true
    }
  ]
})
export class ContentEditableDirective implements ControlValueAccessor {
  private onChange: any;
  private onTouched: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}



  @HostListener('input', ['$event.target.innerHTML'])
  onInput(value: any): void {
    this.onChange(value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'contentEditable', !isDisabled);
  }
}
