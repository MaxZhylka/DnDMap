import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-temporary-hits',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './temporary-hits.component.html',
  styleUrl: './temporary-hits.component.css'
})
export class TemporaryHitsComponent {

  constructor(public characterService:CharacterService) {
  }
}
