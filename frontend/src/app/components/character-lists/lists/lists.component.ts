import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  constructor(private router: Router) {
  }
redirectToCharacterCreation() {
    this.router.navigate(['/registration/character']);
}
}
