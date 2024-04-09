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
  headId: string[] = ['class', 'backstory', 'race', 'worldviews', 'experience','level'];
  headText: string[] = ['КЛАСС', 'ПРЕДЫСТОРИЯ', 'РАСА', 'МИРОВОЗРЕНИЕ', 'ОПЫТ'];
  headForm:FormGroup = new FormGroup({
    name: new FormControl(''),
    characterClass: new FormControl(''),
    characterBackstory: new FormControl(''),
    characterRace: new FormControl(''),
    worldviews: new FormControl(''),
    experience: new FormControl(''),
    level: new FormControl('1'),
  });
  SubmitForm(){
    console.log(this.headForm)
  }

    constructor( public characterService:CharacterService) {
    this.ChangeLvlSub();
    this.ChangeNameSub();
  }
ChangeLvlSub() {
  this.headForm.get('level')?.valueChanges.pipe(
  tap(level => {
   if (((/^\d+$/.test(level)) || level == "")) {
      const numLevel = parseInt(level);
      if (numLevel < 1 || numLevel > 20) {

        const correctedLevel = Math.min(Math.max(numLevel, 1), 20);
        this.headForm.get("level")?.setValue(correctedLevel, { emitEvent: false });
      }
    } else {

      this.headForm.get("level")?.setValue(1, { emitEvent: false });
    }
    this.characterService.level = this.headForm.get("level")?.value;

  })
).subscribe();
}
ChangeNameSub(){
    this.headForm.get('name')?.valueChanges.pipe(
      tap(name => {
        this.characterService.name = this.headForm.get("name")?.value;
      })
    ).subscribe();
}
onChange()
{
  if(this.headForm.get("level")?.value=="")
  {
     this.headForm.get("level")?.setValue(1, { emitEvent: false });
     this.characterService.level=this.headForm.get('level')?.value;
  }
}


}
