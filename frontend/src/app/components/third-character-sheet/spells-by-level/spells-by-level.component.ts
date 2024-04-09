import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-spells-by-level',
  templateUrl: './spells-by-level.component.html',
  styleUrl: './spells-by-level.component.css'
})
export class SpellsByLevelComponent {
  @Input() spellLevel:number=0;
  spellsForm:FormGroup = new FormGroup({
    spells: new FormControl('0')});
getArray()
{

 return Array.from({ length: parseInt(this.spellsForm.get("spells")?.value)}, (_, index) => index + 1);
}
constructor() {
  this.ChangeLvlSub();
}
ChangeLvlSub() {
  this.spellsForm.get('spells')?.valueChanges.pipe(
    tap(spells => {
      if (((/^\d+$/.test(spells)) || spells == "")) {
        const numLevel = parseInt(spells);
        if (numLevel < 0 || numLevel > 10) {

          const correctedLevel = Math.min(Math.max(numLevel, 0), 10);
          this.spellsForm.get("spells")?.setValue(correctedLevel, {emitEvent: false});
        }
      } else {

        this.spellsForm.get("spells")?.setValue(0, {emitEvent: false});
      }


    })
  ).subscribe();
}
onChange()
{
  if(this.spellsForm.get("spells")?.value=="")
  {
     this.spellsForm.get("spells")?.setValue(0, { emitEvent: false });
  }
}
}
