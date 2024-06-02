import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-general-sheet',
  templateUrl: './general-sheet.component.html',
  styleUrl: './general-sheet.component.css'
})
export class GeneralSheetComponent {
  constructor(private router: Router) {
  }
redirectToCharacterCreation() {
    this.router.navigate(['/registration/character']);
}
}
