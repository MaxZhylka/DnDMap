import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-savingthrow',
  templateUrl: './savingthrow.component.html',
  styleUrl: './savingthrow.component.css'
})
export class SavingthrowComponent {
  @Input() text: string = '';
  @Input() attributeId: string = '';
  @Input() abilitysave: string = '';
  @Input() id!:number;



  constructor(protected characterService: CharacterService) {

  }



  get calculateSavingThrow(): string {
    if(  this.characterService[this.attributeId+"_savingthrow"]) {
      let proficiency: number = Math.floor((this.characterService.level - 1) / 4 + 2);
      let modificator: number = Math.floor((this.characterService[this.attributeId] - 10) / 2)
      let result = modificator + proficiency;
      if (result > 0)
        return '+' + result;
      else return '' + result;
    }
    else
    {
        let modificator: number = Math.floor((this.characterService[this.attributeId] - 10) / 2)
    if (modificator > 0)
      return '+' + modificator;
    else return '' + modificator;
    }
  }
  handleToggleChange(toggle: boolean) {
    this.characterService[this.attributeId+"_savingthrow"] = toggle;
  }


}
