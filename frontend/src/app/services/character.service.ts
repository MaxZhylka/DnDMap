import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  headValue:string[]=['','','','',''];
  level:number=1;
  constructor() { }
}
