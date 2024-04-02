import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
export interface attackData {
  id: number;
  nameAttack: string;
  modifier: string;
  characteristic: string;
  damage: string;
  attackBonus: string;
  proficiency: boolean;
}
@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.css']
})
export class AttacksComponent implements OnInit{
  @Input() attackId!: number;
  @Output() attackClick= new EventEmitter<attackData>;
data!: attackData;

ngOnInit() {
    this.data= {
      id: this.attackId,
      nameAttack: "",
      modifier: "",
      characteristic: "0",
      damage: "",
      attackBonus: "",
      proficiency: false
    };
}

  constructor(private characterService: CharacterService) {

}
get getAttackBonus()
{
 let attackBonus:number;
 let modifierValue:number;
 let abilityValue:number;
 let proficiency:number;
 if(this.data.characteristic!='0')
 {
   abilityValue= Math.floor((this.characterService[this.data.characteristic]  - 10) / 2);

 }
 else abilityValue=0;
 if(this.data.proficiency)
 {
   proficiency= this.characterService.proficiency;

 } else proficiency=0;
if(!isNaN(parseInt(this.data.modifier)))
{
  modifierValue=parseInt(this.data.modifier)
}
else modifierValue=0;
 attackBonus=modifierValue+abilityValue+proficiency;
  return attackBonus;
}

  getData(): attackData {


    return this.data;
  }

  onClick(): void
  {
    const data: attackData = this.getData();
    this.attackClick.emit(data);
  }
}

