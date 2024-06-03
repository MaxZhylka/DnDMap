import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-general-sheet',
  templateUrl: './general-sheet.component.html',
  styleUrl: './general-sheet.component.css'
})
export class GeneralSheetComponent {

  characters:any[]=[];

  constructor(public characterService:CharacterService) {
    this.characterService.getMyCharacters().subscribe({
      next:(value)=>{
        console.log(value);
        this.characters=value;
      },
      error:(error)=>
      {
        console.log(error);
      }

    })

  }


}
