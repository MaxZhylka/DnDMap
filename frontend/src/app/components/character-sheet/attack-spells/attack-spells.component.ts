import { Component } from '@angular/core';
import {attackData} from "../attacks/attacks.component";

@Component({
  selector: 'app-attack-spells',
  templateUrl: './attack-spells.component.html',
  styleUrl: './attack-spells.component.css'
})
export class AttackSpellsComponent {
  attacks: number[]=[0,1];
  display:boolean=false;
  chosenAttack:any;
  addAttack()
{
  this.attacks.push(this.attacks.length);
}
closeAttackSpells() {

  setTimeout(() => {
    this.display = false;

  }, 150);
}
deleteAttack()
{

 this.attacks.splice(this.chosenAttack.id,1)

}


  displayCalc(chosenAttack:any)
  {

    this.chosenAttack=chosenAttack;
    this.display=!this.display;
  }
}
