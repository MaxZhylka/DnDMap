import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-character-sheet',
  templateUrl: './second-character-sheet.component.html',
  styleUrl: './second-character-sheet.component.css'
})
export class SecondCharacterSheetComponent implements OnInit{
alliesandtreasureid:string[]=['allies','additionalfeatures','treasure']
  alliesandtreasuretext:string[]=['СОЮЗНИКИ И ОРГАНИЗАЦИИ','ДОПОЛНИТЕЛЬНЫЕ СПОСОБНОСТИ И УМЕНИЯ','СОКРОВИЩА']
  constructor() {
  }
ngOnInit() {
}
portrait="../../../assets/img/character.png";

onselectFile(event: any){
  if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.portrait=event.target.result;
    }
  }
}
}
