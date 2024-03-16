import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppModule} from "./app.module";
import {NgForOf} from "@angular/common";
import {CharacterSheetModule} from "./modules/character-sheet/character-sheet.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NgForOf,CharacterSheetModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applicationtest';
}
