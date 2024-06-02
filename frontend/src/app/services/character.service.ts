import { Injectable } from '@angular/core';
import {attackData} from "../components/character-sheet/attacks/attacks.component";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
 countersByLevel: { [key: string]: number } = {
    8: 11,
    7: 12,
    6: 13,
    5: 12,
    4: 12,
    3: 19,
    2: 19,
    1: 18,
    0: 18
  };



   constructor(private http: HttpClient) {
     this.initializeSpellData();
   }
       private initializeSpellData(): void {
    for (let level in this.countersByLevel) {
      if (this.countersByLevel.hasOwnProperty(level)) {
        this.spellData[+level] = Array.from({ length: this.countersByLevel[level] }, () => ({ boolean: false, string: "" }));
      }
    }
  }
  name:string='Имя персонажа';
  class:string="";
  backstory:string="";
  race:string="";
  worldviews:string="";
  experience:string="";
  level:number=1;
  proficiency:number=2;
  //ability value
  strength:number=10;
  dexterity:number=10;
  constitution:number=10;
  intelligence:number=10;
  wisdom:number=10;
  charisma:number=10;
  inspiration:boolean=false;
  //savingtrow
  strength_savingthrow:boolean=false;
  dexterity_savingthrow:boolean=false;
  constitution_savingthrow:boolean=false;
  intelligence_savingthrow:boolean=false;
  wisdom_savingthrow:boolean=false;
  charisma_savingthrow:boolean=false;
  //ability
  acrobatic: number = 0;
  animalHandling: number = 0;
  arcane: number = 0;
  athletics: number = 0;
  deception: number = 0;
  history: number = 0;
  insight: number = 0;
  intimidation: number = 0;
  investigation: number = 0;
  medicine: number = 0;
  nature: number = 0;
  perception: number = 0;
  performance: number = 0;
  persuasion: number = 0;
  religion: number = 0;
  sleightOfHand: number = 0;
  stealth: number = 0;
  survival: number = 0;


  //hits and other's
  armourclass:number=0;
  speed:number=30;
  hitPointsMax:number=1;
  hitPoints:number=1;
  temporaryHitPoints:number|null=null;
  hitDice: string="1d6";
  success1:boolean=false;
  success2:boolean=false;
  success3:boolean=false;
  fail1:boolean=false;
  fail2:boolean=false;
  fail3:boolean=false;
  personalTraits:string="";
  ideals:string="";
  bonds:string="";
  flaws:string="";
  features:string="";
  proficiencies:string="";


  attackAndSpells: attackData[] = [
    {
      id: 0,
      nameAttack: "",
      modifier: "",
      characteristic: "0",
      damage: "",
      attackBonus: "",
      proficiency: false
    },
    {
      id: 1,
      nameAttack: "",
      modifier: "",
      characteristic: "0",
      damage: "",
      attackBonus: "",
      proficiency: false
    }
  ];
  private nextId=this.attackAndSpells.length;
  getNewAttackId()
  {
    return this.nextId++;
  }
  //coins
  platinum:number=0;
  electrium:number=0;
  golden:number=0;
  silver:number=0;
  copper:number=0;

  age:string='';
  height:string='';
  weight:string='';
  eyeColor:string='';
  skinColor:string='';
  hairColor:string='';

  appearance:string="../../../assets/img/character.png";
  imageToLoad!: File;

  allies:string='';
  backstorys:string='';
  additionalfeatures:string='';
  treasure:string='';

  spellcastingAbilityScore:string="0";
  temp:string="";
  // расставить правильно потом
  equipment:string="";

  spellSlots: number[] = Array(9).fill(0);
  spellSlotsBoolean: boolean[][] = Array.from({ length: 9 }, () => Array(10).fill(false));

  spellData: { boolean: boolean, string: string }[][] = [];
   conspiracies0:string='';
   conspiracies1:string='';
   conspiracies2:string='';
   conspiracies3:string='';
   conspiracies4:string='';
   conspiracies5:string='';
   conspiracies6:string='';
   conspiracies7:string='';
   conspiracies8:string='';
   conspiracies9:string='';
   conspiracies10:string='';
   conspiracies11:string='';
   conspiracies12:string='';

  uploadImage(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post('http://127.0.0.1:8000/registration/upload/', formData);
  }

    collectCharacterData() {
    return {
      name: this.name,
      class: this.class,
      backstory: this.backstory,
      race: this.race,
      worldviews: this.worldviews,
      experience: this.experience,
      level: this.level,
      proficiency: this.proficiency,
      strength: this.strength,
      dexterity: this.dexterity,
      constitution: this.constitution,
      intelligence: this.intelligence,
      wisdom: this.wisdom,
      charisma: this.charisma,
      inspiration: this.inspiration,
      strength_savingthrow: this.strength_savingthrow,
      dexterity_savingthrow: this.dexterity_savingthrow,
      constitution_savingthrow: this.constitution_savingthrow,
      intelligence_savingthrow: this.intelligence_savingthrow,
      wisdom_savingthrow: this.wisdom_savingthrow,
      charisma_savingthrow: this.charisma_savingthrow,
      acrobatic: this.acrobatic,
      animalHandling: this.animalHandling,
      arcane: this.arcane,
      athletics: this.athletics,
      deception: this.deception,
      history: this.history,
      insight: this.insight,
      intimidation: this.intimidation,
      investigation: this.investigation,
      medicine: this.medicine,
      nature: this.nature,
      perception: this.perception,
      performance: this.performance,
      persuasion: this.persuasion,
      religion: this.religion,
      sleightOfHand: this.sleightOfHand,
      stealth: this.stealth,
      survival: this.survival,
      armourclass: this.armourclass,
      speed: this.speed,
      hitPointsMax: this.hitPointsMax,
      hitPoints: this.hitPoints,
      temporaryHitPoints: this.temporaryHitPoints,
      hitDice: this.hitDice,
      success1: this.success1,
      success2: this.success2,
      success3: this.success3,
      fail1: this.fail1,
      fail2: this.fail2,
      fail3: this.fail3,
      personalTraits: this.personalTraits,
      ideals: this.ideals,
      bonds: this.bonds,
      flaws: this.flaws,
      features: this.features,
      proficiencies: this.proficiencies,
      attackAndSpells: this.attackAndSpells,
      platinum: this.platinum,
      electrium: this.electrium,
      golden: this.golden,
      silver: this.silver,
      copper: this.copper,
      age: this.age,
      height: this.height,
      weight: this.weight,
      eyeColor: this.eyeColor,
      skinColor: this.skinColor,
      hairColor: this.hairColor,
     //удален файл с картинкой аватарки
      allies: this.allies,
      backstorys: this.backstorys,
      additionalfeatures: this.additionalfeatures,
      treasure: this.treasure,
      spellcastingAbilityScore: this.spellcastingAbilityScore,
      temp: this.temp,
      equipment: this.equipment,
      spellSlots: this.spellSlots,
      spellSlotsBoolean: this.spellSlotsBoolean,
      spellData: this.spellData,
      conspiracies0: this.conspiracies0,
      conspiracies1: this.conspiracies1,
      conspiracies2: this.conspiracies2,
      conspiracies3: this.conspiracies3,
      conspiracies4: this.conspiracies4,
      conspiracies5: this.conspiracies5,
      conspiracies6: this.conspiracies6,
      conspiracies7: this.conspiracies7,
      conspiracies8: this.conspiracies8,
      conspiracies9: this.conspiracies9,
      conspiracies10: this.conspiracies10,
      conspiracies11: this.conspiracies11,
      conspiracies12: this.conspiracies12,
    };
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    });
  }

  createCharacter(characterData: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/registration/characters/`, characterData, { headers: this.getAuthHeaders() });
  }

  getMyCharacters(): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/characters/my_characters/`, { headers: this.getAuthHeaders() });
  }

  [key: string]: any;

}
