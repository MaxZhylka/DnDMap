import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.css']
})
export class CharacterHeaderComponent {
  headId: string[] = ['characterClass', 'characterBackstory', 'characterRace', 'worldviews', 'experience', 'level'];
  headText: string[] = ['КЛАСС', 'ПРЕДЫСТОРИЯ', 'РАСА', 'МИРОВОЗРЕНИЕ', 'ОПЫТ', 'УРОВЕНЬ'];


   constructor(public characterService: CharacterService) {

   }



}
