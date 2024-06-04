import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../../services/character.service";

@Component({
  selector: 'app-second-character-sheet',
  templateUrl: './second-character-sheet.component.html',
  styleUrls: ['./second-character-sheet.component.css']
})
export class SecondCharacterSheetComponent implements OnInit {
  display: boolean = false;
  alliesandtreasuretext: string[] = ['СОЮЗНИКИ И ОРГАНИЗАЦИИ', 'ДОПОЛНИТЕЛЬНЫЕ СПОСОБНОСТИ И УМЕНИЯ', 'СОКРОВИЩА'];
  personalId: string[] = ['allies', 'additionalfeatures', 'treasure'];
  portrait = this.characterService.appearance;
  imageToCrop: any;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {

    this.characterService.characterData$.subscribe({

      next:(data)=> {
          if(data.appearance!=null) {
            this.portrait = data.appearance;
          }
          else this.portrait='assets/img/character.png'

      }
    });



  }

  getData(event: any) {
    this.portrait = event;
  }

  onselectFile(event: any) {
    this.imageToCrop = event;
    this.display = true;



  }
  close()
  {
    this.display=false;
        const fileInput = this.imageToCrop.target as HTMLInputElement;
    fileInput.value = '';
  }
}
