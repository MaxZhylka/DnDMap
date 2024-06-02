import { Component } from '@angular/core';
import { CharacterService } from '../../../services/character.service';
import { attackData } from '../attacks/attacks.component';

@Component({
  selector: 'app-attack-spells',
  templateUrl: './attack-spells.component.html',
  styleUrls: ['./attack-spells.component.css']
})
export class AttackSpellsComponent {
  display: boolean = false;
  chosenAttack: any;

  constructor(public characterService: CharacterService) {}

  addAttack() {
    const newAttack: attackData = {
      id: this.characterService.getNewAttackId(),
      nameAttack: "",
      modifier: "",
      characteristic: "0",
      damage: "",
      attackBonus: "",
      proficiency: false
    };
    this.characterService.attackAndSpells.push(newAttack);
  }

  closeAttackSpells() {
    setTimeout(() => {
      this.display = false;
    }, 150);
  }

  deleteAttack() {
    this.characterService.attackAndSpells = this.characterService.attackAndSpells.filter(attack => attack.id !== this.chosenAttack.id);
  }

  displayCalc(chosenAttack: any) {
    this.chosenAttack = chosenAttack;
    this.display = !this.display;
  }
}
