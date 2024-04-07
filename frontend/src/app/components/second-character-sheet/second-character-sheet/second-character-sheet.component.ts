import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-second-character-sheet',
  templateUrl: './second-character-sheet.component.html',
  styleUrl: './second-character-sheet.component.css'
})
export class SecondCharacterSheetComponent implements OnInit{
  display:boolean=false;
  alliesandtreasuretext:string[]=['СОЮЗНИКИ И ОРГАНИЗАЦИИ','ДОПОЛНИТЕЛЬНЫЕ СПОСОБНОСТИ И УМЕНИЯ','СОКРОВИЩА']
  constructor() {
  }
ngOnInit() {
}
portrait="../../../assets/img/character.png";
imageToCrop: any;
getData(event:any){
  this.portrait=event;
}
onselectFile(event: any){
      this.imageToCrop = event;
      this.display=true;
    }

}
