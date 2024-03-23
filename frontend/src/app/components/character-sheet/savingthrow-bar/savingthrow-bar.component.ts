import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-savingthrow-bar',
  templateUrl: './savingthrow-bar.component.html',
  styleUrl: './savingthrow-bar.component.css'
})
export class SavingthrowBarComponent {
  saveId: string[] = ['strength-image', 'dexterity-image', 'constitution-image', 'intelligence-image', 'wisdom-image', 'charisma-image'];
  saveButton: string[] = ['strength-button', 'dexterity-button', 'constitution-button', 'intelligence-button', 'wisdom-button', 'charisma-button'];
  saveAbillity: string[] = ['strength-savingthrow', 'dexterity-savingthrow', 'constitution-savingthrow', 'intelligence-savingthrow', 'wisdom-savingthrow', 'charisma-savingthrow'];
  saveText: string[] = ['СИЛА', 'ЛОВКОСТЬ', 'ТЕЛОСЛОЖЕНИЕ', 'ИНТЕЛЕКТ', 'МУДРОСТЬ', 'ХАРИЗМА'];
}
