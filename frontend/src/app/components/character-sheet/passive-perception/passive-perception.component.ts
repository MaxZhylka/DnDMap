import {Component, Input} from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-passive-perception',
  templateUrl: './passive-perception.component.html',
  styleUrl: './passive-perception.component.css'
})
export class PassivePerceptionComponent {
  @Input() text: string = '';
  @Input() id: string = '';
  @Input() abilitysave: string = '';
  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirtwo.png';
  currentImage: string = this.inspirOne;
  toggle: boolean = false;
  constructor(private characterService: CharacterService) {
  }
get calculateSavingThrow(): number {
      let proficiency: number = Math.floor((this.characterService.level - 1) / 4 + 2);
      let modifire = Math.floor((this.characterService.wisdom - 10) / 2);
      let checkBox:boolean = this.characterService.checkboxPerception;
      if (checkBox)
      {
        return 10 + proficiency + modifire;
      }
      else
      {
        return 10 + modifire;
      }
  }
}
