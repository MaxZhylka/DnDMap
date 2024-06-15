import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription, tap} from "rxjs";
import {CharacterService} from "../../../services/character.service";
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

export class SpellsByLevelComponent implements OnInit,OnDestroy{
  @Input() spellLevel:number=0;
  spellsForm:FormGroup = new FormGroup({
    spellsSlots: new FormControl('0')});
  subscription= new Subscription();
  listHeight:number=20;
  @Input() spellCount: number=1;
  spellData:SpellData[]=[];

  ngOnInit() {
    this.spellData=new Array(this.spellCount).fill({});
    this.listHeight=20*this.spellCount;

    this.subscription=this.characterService.characterData$.subscribe(
      {
        next:(data)=>{
          if(data.spellSlots) {
            this.spellsForm.get('spellsSlots')?.setValue(data.spellSlots[this.spellLevel - 1]);
          }
          }
      }
    )

  }
ngOnDestroy() {
    this.subscription.unsubscribe();
}

  getArray() {
    return this.characterService.spellSlotsBoolean[this.spellLevel - 1].slice(0, this.characterService.spellSlots[this.spellLevel-1]);
  }
constructor(public  characterService:CharacterService) {
  this.ChangeLvlSub();
}
ChangeLvlSub() {
  this.spellsForm.get('spellsSlots')?.valueChanges.pipe(
    tap(spells => {
      if ((/^\d+$/.test(spells)) || spells === "") {
        const numLevel = parseInt(spells);
        if (numLevel < 0 || numLevel > 10) {
          const correctedLevel = Math.min(Math.max(numLevel, 0), 10);
          this.spellsForm.get("spellsSlots")?.setValue(correctedLevel, { emitEvent: false });
        }
        this.updateCharacterService(); //
      } else {
        this.spellsForm.get("spellsSlots")?.setValue(0, { emitEvent: false });
      }
      this.updateCharacterService();
    })
  ).subscribe();
}
  updateCharacterService() {
    this.characterService.spellSlots[this.spellLevel-1]=this.spellsForm.get("spellsSlots")?.value;
  }
    trackByIndex(index: number, item: any) {
    return index;
  }
onChange()
{
  if(this.spellsForm.get("spellsSlots")?.value=="")
  {
     this.spellsForm.get("spellsSlots")?.setValue(0, { emitEvent: false });
      this.updateCharacterService();
  }
}
handleToggleChange(event:any)
{

  this.characterService.spellSlotsBoolean[this.spellLevel-1][event.id]=event.toggle;

}
handleToggleChange2(event:any)
{

  this.characterService.spellData[this.spellLevel-1][event.id].boolean=event.toggle;


}

}
