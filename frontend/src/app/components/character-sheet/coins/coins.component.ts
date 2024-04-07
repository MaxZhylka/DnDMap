import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.css'
})
export class CoinsComponent {
 @Input() coinValue!:string;
}
