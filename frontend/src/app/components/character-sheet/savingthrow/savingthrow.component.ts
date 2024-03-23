import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-savingthrow',
  templateUrl: './savingthrow.component.html',
  styleUrl: './savingthrow.component.css'
})
export class SavingthrowComponent {
  @Input()text: string='';
  @Input()idimage: string='';
  @Input()abilitybutton:string='';
  @Input()abilitysave: string='';
  abillityIndex:number=0;
inspirOne:string='../../../assets/img/inspirone.png';
inspirTwo:string='../../../assets/img/inspirtwo.png';
currentImage: string = this.inspirOne;
toggleImage() {
    this.currentImage = (this.currentImage === this.inspirOne) ? this.inspirTwo : this.inspirOne;
  }
}
