import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapModule} from "./modules/map-sheet/map.module";
import {NgForOf} from "@angular/common";
import {CharacterSheetModule} from "./modules/character-sheet/character-sheet.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapModule, NgForOf,CharacterSheetModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applicationtest';
}
