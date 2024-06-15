import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.css'
})
export class InitiativeComponent {
  constructor(private characterService: CharacterService) {
  }
get calculateInit(): string {
    let modificator = Math.floor((this.characterService.dexterity - 10) / 2);
    if (modificator > 0){
      return '+' + modificator;
    }
    else {
      return '' + modificator;
    }
  }
}
