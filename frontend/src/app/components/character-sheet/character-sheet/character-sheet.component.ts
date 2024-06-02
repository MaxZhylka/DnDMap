import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})
export class CharacterSheetComponent implements OnInit{

  constructor(private characterService:CharacterService) {
  }
  ngOnInit() {
     this.characterService.createCharacter(this.characterService.collectCharacterData()).subscribe(response => {
      console.log('Character created:', response);
    }, error => {
      console.error('Error creating character:', error);
    });
  }

}

