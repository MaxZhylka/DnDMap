import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs";
interface SpellData
{
  include:boolean,
  spellName:string
}
@Component({
  selector: 'app-spells-by-level',
  templateUrl: './spells-by-level.component.html',
  styleUrl: './spells-by-level.component.css'
})

export class SpellsByLevelComponent implements OnInit{
  @Input() spellLevel:number=0;
  spellsForm:FormGroup = new FormGroup({
    spells: new FormControl('0')});
  listHeight:number=20;
  @Input() spellCount: number=1;
  spellData:SpellData[]=[];
  ngOnInit() {
    this.spellData=new Array(this.spellCount).fill({});
    this.listHeight=20*this.spellCount;
  }

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
