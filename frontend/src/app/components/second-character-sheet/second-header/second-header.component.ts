import { Component } from '@angular/core';
import {CharacterSheetModule} from "../../../modules/character-sheet/character-sheet.module";
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrl: './second-header.component.css'
})
export class SecondHeaderComponent {
  headId: string[] = ['age', 'height', 'weight', 'eyeColor', 'skinColor','hairColor'];
  headText: string[] = ['ВОЗРАСТ', 'РОСТ', 'ВЕС', 'ГЛАЗА', 'КОЖА','ВОЛОСЫ'];

}