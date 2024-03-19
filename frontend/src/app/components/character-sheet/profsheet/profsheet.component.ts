import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {MapHeaderComponent} from "../../map-sheet/map-header/map-header.component";
import {CharacterHeaderComponent} from "../character-header/character-header.component";
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-profsheet',
  templateUrl: './profsheet.component.html',
  styleUrls: ['./profsheet.component.css']
})
export class ProfsheetComponent  {
  @Input() text: string = '';
  @Input() id: string = '';

  lvl=this.characterService.headValue[5];

  constructor(public characterService: CharacterService) {}
  get proficiency(): number {
    const lvl = this.characterService.headValue[5]; // Получаем текущий lvl из CharacterService
    return (parseInt(lvl) - 1) / 4 + 2; // Пересчитываем proficiency и возвращаем его
  }
}
