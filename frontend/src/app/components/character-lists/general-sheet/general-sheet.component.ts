import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../../services/character.service";

@Component({
  selector: 'app-general-sheet',
  templateUrl: './general-sheet.component.html',
  styleUrls: ['./general-sheet.component.css']
})
export class GeneralSheetComponent implements OnInit {
  characters: any[] = [];

  constructor(public characterService: CharacterService) {}

  ngOnInit() {
    setTimeout(() => {
         this.characterService.getMyCharacters().subscribe({
      next: (value) => {
        console.log(value);
        this.characters = value;
      },
      error: (error) => {
        console.log(error);
      }
    });
    }, 10);
  }

}
