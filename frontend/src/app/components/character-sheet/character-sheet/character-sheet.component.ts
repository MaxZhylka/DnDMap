import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {response} from "express";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})
export class CharacterSheetComponent implements OnInit{

  constructor(  private route: ActivatedRoute, private characterService:CharacterService) {
  }
  ngOnInit() {

     this.route.paramMap.subscribe(params => {
       const id = params.get('id');
       if (id) {
         this.characterService.getMyCharacters().subscribe({
           next: (data) => {
             console.log(data[id]);
             this.characterService.setData(data[id]);
           },
           error: (error) => {
             console.log(error)
           }
         });
       } else {

          this.characterService.setData(this.characterService.defaultValues);
          this.characterService.initializeSpellData();
         this.characterService.createCharacter(this.characterService.collectCharacterData()).subscribe({
           next: (response) => {
             console.log('Character created:', response);
           },
           error: (error) => {
             console.error('Error creating character:', error);
           }
         });
       }
        });
  }
}


