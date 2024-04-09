import {Component, Input} from '@angular/core';
import {CharacterService} from "../../../services/character.service";


@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrls: ['./head-content.component.css'],

})
export class HeadContentComponent {
  @Input() text!: string;
  @Input() id!: string;



  constructor(public characterService:CharacterService) {
  }

}
