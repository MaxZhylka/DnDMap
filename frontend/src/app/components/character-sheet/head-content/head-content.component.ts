import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrls: ['./head-content.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HeadContentComponent),
      multi: true
    }
  ]
})
export class HeadContentComponent implements ControlValueAccessor {
  @Input() text!: string;
  @Input() id!: string;
  value!: string;


  onChange: any = () => {};
  onTouch: any = () => {};


  writeValue(value: any): void {
    this.value = value;
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onInput(value: string) {

    this.value = value;
    this.onChange(value);
  }
}
