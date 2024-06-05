import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {response} from "express";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})
export class CharacterSheetComponent implements OnInit, OnDestroy{
    private updateInterval: any;
  constructor(  private route: ActivatedRoute,private router:Router, private characterService:CharacterService) {
  }


  @HostListener('window:beforeunload')
  sendData()
  {

   this.updateCharacterData();

  }



  ngOnInit() {

     this.route.paramMap.subscribe(params => {
       const id = params.get('id');
       if (id) {
         this.characterService.getMyCharacters().subscribe({
           next: (data) => {

             if(id>data.length)
             {
               this.router.navigate(['/character-list'])
             }
             this.characterService.setData(data[id]);
           },
           error: (error) => {
             console.log(error)
           }
         });
       }
     })
       this.updateInterval = setInterval(() => {
      this.updateCharacterData();
    }, 15000);
  }
  ngOnDestroy() {
      if (this.updateInterval) {
      clearInterval(this.updateInterval);

    }

  this.characterService.updateData(this.characterService.collectCharacterData()).subscribe({
      next: (data) => { console.log('Data updated:', data) },
      error: (error) => { console.error('Error updating data:', error) }
    });


  }
   private updateCharacterData() {

       this.characterService.updateData(this.characterService.collectCharacterData()).subscribe({
         next: (data) => {
           console.log('Data updated:', data)
         },
         error: (error) => {
           console.error('Error updating data:', error)
         }
       });

   }
}


