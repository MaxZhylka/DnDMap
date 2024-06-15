import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrl: './armor.component.css'
})
export class ArmorComponent {
  constructor(public characterService:CharacterService) {
  }
shield: string = '../../../assets/img/shcild.png';
  changes()
  {
    //console.log(this.characterService.armourclass);
  }
}
