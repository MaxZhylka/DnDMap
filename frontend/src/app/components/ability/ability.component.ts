import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent {
  @Input() attribute: string='';
  index: string = '10';
  formCounter:number =0;
  modifire: string = this.calculateModifire(parseInt(this.index));

  constructor() {}

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;

    if(target.value!="") {
      this.index = target.value;
    }

    const value = parseInt(target.value);

    if(isNaN(value))
    {
      this.modifire='0';

    }

    if (value > 30) {
      this.index = '30';
      this.modifire = this.calculateModifire(parseInt(this.index));

    } else if (value>1) {
      this.index = value.toString();
      this.modifire = this.calculateModifire(parseInt(this.index));
    }
    else if (value<=1) {
      this.index = '1';
      this.modifire = this.calculateModifire(parseInt(this.index));
    }
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value);
    if(isNaN(value)) {
      this.index = '10';
    }
    this.modifire = this.calculateModifire(parseInt(this.index));
  }

  calculateModifire(value: number) {
    let modificator= Math.floor((value - 10) / 2);
    if(modificator>0)
    {
      return '+'+modificator;
    }
    return JSON.stringify(modificator);
  }
}
