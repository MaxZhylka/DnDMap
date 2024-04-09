import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-third-header',
  templateUrl: './third-header.component.html',
  styleUrl: './third-header.component.css'
})
export class ThirdHeaderComponent {
  selectedIndex:string='0';
  characteristics = [
    { value: '0', display: 'Без Характеристики' },
    { value: 'intelligence', display: 'Интеллект' },
    { value: 'wisdom', display: 'Мудрость' },
    { value: 'charisma', display: 'Харизма' }
  ];

constructor(public characterService:CharacterService) {
}
get getSavingThrow()
{
  if(this.selectedIndex=='0')
  {
    return 0;
  }
  else
  {
    return (Math.floor(this.characterService[this.selectedIndex]-10)/2)+8+this.characterService.proficiency;
  }
}
get getAttackBonus()
{

   if(this.selectedIndex=='0')
  {
    return 0;
  }
  else
  {
   return (Math.floor(this.characterService[this.selectedIndex]-10)/2)+this.characterService.proficiency;
  }
}
 get getClass()
 {

   return this.characterService.class;
 }
}
