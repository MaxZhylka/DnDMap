import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-savingthrow-bar',
  templateUrl: './savingthrow-bar.component.html',
  styleUrl: './savingthrow-bar.component.css'
})
export class SavingthrowBarComponent {
  saveText: string[] = ['Сила', 'Ловкость', 'Телосложение', 'Интелект', 'Мудрость', 'Харизма'];
   attributesID:string[]=['strength','dexterity','constitution', 'intelligence','wisdom','charisma']

}
