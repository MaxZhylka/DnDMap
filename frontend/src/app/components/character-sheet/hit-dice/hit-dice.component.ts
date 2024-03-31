import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-hit-dice',

  templateUrl: './hit-dice.component.html',
  styleUrl: './hit-dice.component.css'
})
export class HitDiceComponent {

  selectedItem: string="1d6";
  items: string[] = ['1d6', '1d8', '1d10', '1d12'];
  toggle: boolean = false;
  constructor( public characterService: CharacterService) {

  }

  get allDice()
  {
    return  this.characterService.level;
  }


}
