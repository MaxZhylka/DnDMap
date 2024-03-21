import {Component, Input} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

   constructor(public CharacterHeaderComponent: CharacterService) {
   }
inputLevel() {
    const level = parseInt(this.headForm.get('level')?.value);
    if (level < 1) {
        this.CharacterHeaderComponent.level = 1;
        this.headForm.get('level')?.setValue(1, { emitEvent: false }); // Set value without emitting valueChanges event
    } else if (level > 20) {
        this.CharacterHeaderComponent.level = 20;
        this.headForm.get('level')?.setValue(20, { emitEvent: false }); // Set value without emitting valueChanges event
    } else {
        this.CharacterHeaderComponent.level = level;
    }
}


}
