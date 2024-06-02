import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-savingthrow-bar',
  templateUrl: './savingthrow-bar.component.html',
  styleUrl: './savingthrow-bar.component.css'
})
export class SavingthrowBarComponent {
  constructor(public characterService:CharacterService) {
  }

  saveText: string[] = ['Сила', 'Ловкость', 'Телосложение', 'Интелект', 'Мудрость', 'Харизма'];
   attributesID:string[]=['strength','dexterity','constitution', 'intelligence','wisdom','charisma']


}
