import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-savingthrow-bar',
  templateUrl: './savingthrow-bar.component.html',
  styleUrl: './savingthrow-bar.component.css'
})
export class SavingthrowBarComponent {
  saveText: string[] = ['СИЛА', 'ЛОВКОСТЬ', 'ТЕЛОСЛОЖЕНИЕ', 'ИНТЕЛЕКТ', 'МУДРОСТЬ', 'ХАРИЗМА'];
   attributesID:string[]=['strength','dexterity','constitution', 'intelligence','wisdom','charisma']

}
