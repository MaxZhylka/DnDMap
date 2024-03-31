import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs";
import {CharacterService} from "../../../services/character.service";


@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit{
  @Input() formHead!: FormGroup;
  @Input() attribute: string = '';
  @Input() headID: string="";
  index: string = '10';
  modifire: string = '0';

  constructor(private characterService:CharacterService) {



    }

 ngOnInit() {
   this.formHead.get(this.headID)?.valueChanges.pipe(
  tap(abilityData => {
   if (((/^\d+$/.test(abilityData)) || abilityData == "")) {
      const numLevel = parseInt(abilityData);
      if (numLevel < 1 || numLevel > 30) {

        const correctedLevel = Math.min(Math.max(numLevel, 1), 30);
        this.formHead.get(this.headID)?.setValue(correctedLevel, { emitEvent: false });
      }
    } else {

      this.formHead.get(this.headID)?.setValue(1, { emitEvent: false });
    }
    this.characterService[this.headID] = this.formHead.get(this.headID)?.value;
    this.calculateModifire(this.formHead.get(this.headID)?.value);
  })
).subscribe();

 }
onChange()
{
  if(this.formHead.get(this.headID)?.value=="")
  {
     this.formHead.get(this.headID)?.setValue(10, { emitEvent: false });
       this.characterService[this.headID] = this.formHead.get(this.headID)?.value;
    this.calculateModifire(this.formHead.get(this.headID)?.value);
  }

}


  calculateModifire(value: number):void {
    let modificator= Math.floor((value - 10) / 2);
    if(modificator>0)
    {
      this.modifire ='+'+modificator;
    }
    else {
      this.modifire = JSON.stringify(modificator);
    }

  }

  protected readonly FormControl = FormControl;
}
