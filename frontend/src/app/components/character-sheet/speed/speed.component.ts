import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrl: './speed.component.css'
})
export class SpeedComponent {

  constructor(public characterService:CharacterService) {
  }
  changes()
  {
    // console.log(this.characterService.speed);
  }
}
