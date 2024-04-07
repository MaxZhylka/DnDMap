import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name:string='';
  headValue:string[]=['','','','','',''];
  level:number=1;
  proficiency:number=2;
  perception:number = 0;
  health: number = 1;
  checkboxPerception: boolean = false;
  strength:number=10;
  dexterity:number=10;
  constitution:number=10;
  intelligence:number=10;
  wisdom:number=10;
  charisma:number=10;
  portrait="../../../assets/img/character.png";
  [key: string]: any;

  constructor() { }
}
