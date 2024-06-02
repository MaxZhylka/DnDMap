import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.css'
})
export class InspirationComponent {
inspirOne:string='../../../assets/img/inspirone.png';
inspirTwo:string='../../../assets/img/inspirtwo.png';
currentImage: string = this.inspirOne;
constructor(private characterService:CharacterService) {
}
toggleImage() {

    this.characterService.inspiration=!this.characterService.inspiration;
    if(!this.characterService.inspiration)
    {
      this.currentImage=this.inspirOne;
    }
    else
    {
      this.currentImage=this.inspirTwo;
    }
  }
}
