import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapModule} from "./modules/map-sheet/map.module";
import {NgForOf} from "@angular/common";
import {CharacterSheetModule} from "./modules/character-sheet/character-sheet.module";
import {RegistrationModule} from "./modules/registration/registration.module";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapModule, NgForOf,CharacterSheetModule, RegistrationModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'applicationtest';
}
