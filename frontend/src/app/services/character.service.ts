import { Injectable } from '@angular/core';
import {attackData} from "../components/character-sheet/attacks/attacks.component";
import {BehaviorSubject, debounceTime, distinctUntilChanged, from, Observable, switchMap, throwError} from "rxjs";
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


  private characterDataSubject: BehaviorSubject<any> = new BehaviorSubject(this.collectCharacterData());
  characterData$: Observable<any> = this.characterDataSubject.asObservable();













   constructor(private http: HttpClient) {
     this.initializeSpellData();

   }

   initializeSpellData(): void {
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
  experience:string="0";
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
   id:number=-1;


    collectCharacterData() {
    return {
      name: this.name,
      characterClass: this.class,
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
      spells: this.attackAndSpells,
      platinum: this.platinum,
      electrum: this.electrium,
      golden: this.golden,
      silver: this.silver,
      copper: this.copper,
      age: this.age,
      height: this.height,
      weight: this.weight,
      eyeColor: this.eyeColor,
      skinColor: this.skinColor,
      hairColor: this.hairColor,
      appearance: this.appearance,
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
      id:this.id
    };
  }

    defaultValues: any = {
    name: 'Имя персонажа',
    class: '',
    backstory: '',
    race: '',
    worldviews: '',
    experience: '0',
    level: 1,
    proficiency: 2,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    inspiration: false,
    strength_savingthrow: false,
    dexterity_savingthrow: false,
    constitution_savingthrow: false,
    intelligence_savingthrow: false,
    wisdom_savingthrow: false,
    charisma_savingthrow: false,
    acrobatic: 0,
    animalHandling: 0,
    arcane: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0,
    armourclass: 0,
    speed: 30,
    hitPointsMax: 1,
    hitPoints: 1,
    temporaryHitPoints: null,
    hitDice: '1d6',
    success1: false,
    success2: false,
    success3: false,
    fail1: false,
    fail2: false,
    fail3: false,
    personalTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    features: '',
    proficiencies: '',
    spells: [
      { id: 0, nameAttack: '', modifier: '', characteristic: '0', damage: '', attackBonus: '', proficiency: false },
      { id: 1, nameAttack: '', modifier: '', characteristic: '0', damage: '', attackBonus: '', proficiency: false }
    ],
    platinum: 0,
    electrum: 0,
    golden: 0,
    silver: 0,
    copper: 0,
    age: '',
    height: '',
    weight: '',
    eyeColor: '',
    skinColor: '',
    hairColor: '',
    appearance: '../../../assets/img/character.png',
    allies: '',
    backstorys: '',
    additionalfeatures: '',
    treasure: '',
    spellcastingAbilityScore: '0',
    temp: '',
    equipment: '',
    spellSlots: Array(9).fill(0),
    spellSlotsBoolean: Array.from({ length: 9 }, () => Array(10).fill(false)),
    spellData:[],
    conspiracies0: '',
    conspiracies1: '',
    conspiracies2: '',
    conspiracies3: '',
    conspiracies4: '',
    conspiracies5: '',
    conspiracies6: '',
    conspiracies7: '',
    conspiracies8: '',
    conspiracies9: '',
    conspiracies10: '',
    conspiracies11: '',
    conspiracies12: ''
  };
  setData(characterData: any): void {
    this.id= characterData.id;
  this.name = characterData.name;
  this.class = characterData.characterClass;
  this.backstory = characterData.backstory;
  this.race = characterData.race;
  this.worldviews = characterData.worldviews;
  this.experience = characterData.experience;
  this.level = characterData.level;
  this.proficiency = characterData.proficiency;
  this.strength = characterData.strength;
  this.dexterity = characterData.dexterity;
  this.constitution = characterData.constitution;
  this.intelligence = characterData.intelligence;
  this.wisdom = characterData.wisdom;
  this.charisma = characterData.charisma;
  this.inspiration = characterData.inspiration;
  this.strength_savingthrow = characterData.strength_savingthrow;
  this.dexterity_savingthrow = characterData.dexterity_savingthrow;
  this.constitution_savingthrow = characterData.constitution_savingthrow;
  this.intelligence_savingthrow = characterData.intelligence_savingthrow;
  this.wisdom_savingthrow = characterData.wisdom_savingthrow;
  this.charisma_savingthrow = characterData.charisma_savingthrow;
  this.acrobatic = characterData.acrobatic;
  this.animalHandling = characterData.animalHandling;
  this.arcane = characterData.arcane;
  this.athletics = characterData.athletics;
  this.deception = characterData.deception;
  this.history = characterData.history;
  this.insight = characterData.insight;
  this.appearance= characterData.appearance;
  this.intimidation = characterData.intimidation;
  this.investigation = characterData.investigation;
  this.medicine = characterData.medicine;
  this.nature = characterData.nature;
  this.perception = characterData.perception;
  this.performance = characterData.performance;
  this.persuasion = characterData.persuasion;
  this.religion = characterData.religion;
  this.sleightOfHand = characterData.sleightOfHand;
  this.stealth = characterData.stealth;
  this.survival = characterData.survival;
  this.armourclass = characterData.armourclass;
  this.speed = characterData.speed;
  this.hitPointsMax = characterData.hitPointsMax;
  this.hitPoints = characterData.hitPoints;
  this.temporaryHitPoints = characterData.temporaryHitPoints;
  this.hitDice = characterData.hitDice;
  this.success1 = characterData.success1;
  this.success2 = characterData.success2;
  this.success3 = characterData.success3;
  this.fail1 = characterData.fail1;
  this.fail2 = characterData.fail2;
  this.fail3 = characterData.fail3;
  this.personalTraits = characterData.personalTraits;
  this.ideals = characterData.ideals;
  this.bonds = characterData.bonds;
  this.flaws = characterData.flaws;
  this.features = characterData.features;
  this.proficiencies = characterData.proficiencies;
  this.attackAndSpells = characterData.spells;
  this.platinum = characterData.platinum;
  this.electrium = characterData.electrum;
  this.golden = characterData.golden;
  this.silver = characterData.silver;
  this.copper = characterData.copper;
  this.age = characterData.age;
  this.height = characterData.height;
  this.weight = characterData.weight;
  this.eyeColor = characterData.eyeColor;
  this.skinColor = characterData.skinColor;
  this.hairColor = characterData.hairColor;
  this.allies = characterData.allies;
  this.backstorys = characterData.backstorys;
  this.additionalfeatures = characterData.additionalfeatures;
  this.treasure = characterData.treasure;
  this.spellcastingAbilityScore = characterData.spellcastingAbilityScore;
  this.temp = characterData.temp;
  this.equipment = characterData.equipment;
  this.spellSlots = characterData.spellSlots;
  this.spellSlotsBoolean = characterData.spellSlotsBoolean;
  this.spellData = characterData.spellData;
  this.conspiracies0 = characterData.conspiracies0;
  this.conspiracies1 = characterData.conspiracies1;
  this.conspiracies2 = characterData.conspiracies2;
  this.conspiracies3 = characterData.conspiracies3;
  this.conspiracies4 = characterData.conspiracies4;
  this.conspiracies5 = characterData.conspiracies5;
  this.conspiracies6 = characterData.conspiracies6;
  this.conspiracies7 = characterData.conspiracies7;
  this.conspiracies8 = characterData.conspiracies8;
  this.conspiracies9 = characterData.conspiracies9;
  this.conspiracies10 = characterData.conspiracies10;
  this.conspiracies11 = characterData.conspiracies11;
  this.conspiracies12 = characterData.conspiracies12;
   this.characterDataSubject.next(this.collectCharacterData());
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

updateData(characterData: any): Observable<any> {

    if(characterData.id==-1) {
      return throwError(() => new Error('Некорректный ID'));
    }
  const url = `http://127.0.0.1:8000/registration/characters/${characterData.id}/`;
  return this.http.put(url, characterData, {
    headers: new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    })
  });
}

updateImage(characterData: any) {
  const url = `http://127.0.0.1:8000/registration/image/${characterData.id}/`;

  const formData = new FormData();
  formData.append('appearance', this.imageToLoad);

  return this.http.put(url, formData, {
    headers: new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    })
  });
}
deleteCharacter(id:number)
{
    const url = `http://127.0.0.1:8000/registration/characters/${id}/`;
  return this.http.delete(url,{
    headers: new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    })
  });
}


  getMyCharacters(): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/registration/my_characters/`, { headers: this.getAuthHeaders() });
  }

  [key: string]: any;

}
