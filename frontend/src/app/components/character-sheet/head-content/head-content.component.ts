import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrl: './head-content.component.css'
})
export class HeadContentComponent {
@Input() text: string='';
@Input()id: string='';
proficiency:string='';
calculateProficiency(): void {
  const inputValue = parseInt(this.id);
  if (inputValue >= 1 && inputValue <= 20) {
    this.proficiency = '+' + Math.ceil(inputValue / 4);
  } else {
    this.proficiency = 'Invalid input';
  }
}
}
