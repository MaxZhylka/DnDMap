import {Component, inject, NgModule, OnInit, PLATFORM_ID} from '@angular/core';
import {Router, RouterOutlet, NavigationEnd } from '@angular/router';
import {MapModule} from "./modules/map-sheet/map.module";
import {isPlatformBrowser, NgClass, NgForOf} from "@angular/common";
import {CharacterSheetModule} from "./modules/character-sheet/character-sheet.module";
import {RegistrationModule} from "./modules/registration/registration.module";
import {HttpClientModule} from "@angular/common/http";
import {CharactersListsModule} from "./modules/characters-lists/characters-lists.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapModule, NgForOf,CharacterSheetModule, RegistrationModule, HttpClientModule, CharactersListsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'applicationtest';
backgroundClass = 'default-bg';
platformId = inject(PLATFORM_ID);
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundClass(event.urlAfterRedirects);
      }
    });
  }

  updateBackgroundClass(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      let Body = document.getElementById("Body");
      if (url === '/character-list' && Body) {
      Body.className = 'characterlist-bg';
    } else if (/\/character-list(\/\d+)?/.test(url) && Body) {
      Body.className = 'default-bg';
    }
    }

  }
}
