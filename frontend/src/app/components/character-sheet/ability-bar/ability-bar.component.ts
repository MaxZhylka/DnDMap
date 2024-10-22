import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CharacterService} from "../../../services/character.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ability-bar',
  templateUrl: './ability-bar.component.html',
  styleUrl: './ability-bar.component.css'
})
export class AbilityBarComponent {
  subscription= new Subscription();
  abilityForm: FormGroup =new FormGroup(

     {
    strength: new FormControl('10'),
    dexterity: new FormControl('10'),
    constitution: new FormControl('10'),
    intelligence: new FormControl('10'),
    wisdom: new FormControl('10'),
    charisma: new FormControl('10')

  }

  );
  attributesID:string[]=['strength','dexterity','constitution', 'intelligence','wisdom','charisma']
  attributes:string[]= ['Сила', 'Ловкость', 'Телосложение', 'Интеллект', 'Мудрость', 'Харизма'];

  constructor(private  characterService:CharacterService) {

    this.subscription= this.characterService.characterData$.subscribe({next:
        (data:any)=>{
      this.abilityForm.patchValue({
        strength: data.strength,
        dexterity: data.dexterity,
        constitution: data.constitution,
        intelligence: data.intelligence,
        wisdom: data.wisdom,
        charisma: data.charisma

      })
        }})

  }


}
