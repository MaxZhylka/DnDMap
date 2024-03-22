import {Component, Input} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, tap} from "rxjs";

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.css']
})
export class CharacterHeaderComponent {
  headId: string[] = ['characterClass', 'characterBackstory', 'characterRace', 'worldviews', 'experience','level'];
  headText: string[] = ['КЛАСС', 'ПРЕДЫСТОРИЯ', 'РАСА', 'МИРОВОЗРЕНИЕ', 'ОПЫТ'];
  headForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    characterClass: new FormControl(''),
    characterBackstory: new FormControl(''),
    characterRace: new FormControl(''),
    worldviews: new FormControl(''),
    experience: new FormControl(''),
    level: new FormControl('1', [Validators.required, Validators.pattern(/^[0-9]+$/)]),

  });
  SubmitForm(){
    console.log(this.headForm)
  }

    constructor() {
    this.headForm.get('level')?.valueChanges.pipe(
      tap(level => {
        const numLevel = parseInt(level);
        if (numLevel < 1 || numLevel > 20|| isNaN(numLevel)) {
          let correctedLevel:number;
          if(!isNaN(numLevel)) {
           correctedLevel = Math.min(Math.max(numLevel, 1), 20);
          }else
          {
            correctedLevel=1;
          }
          this.headForm.get('level')?.setValue(correctedLevel, { emitEvent: false });
        }
      })
    ).subscribe();
  }




}
