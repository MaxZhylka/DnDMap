import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-allies-and-treasure',
  templateUrl: './allies-and-treasure.component.html',
  styleUrl: './allies-and-treasure.component.css'
})
export class AlliesAndTreasureComponent {
  @Input() alliesAndTreasureId: string='';
  @Input() alliesAndTreasureText: string='';
  text:string='';
}
