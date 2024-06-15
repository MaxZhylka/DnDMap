import { Component, OnInit } from '@angular/core';

interface SpellByLevelData {
  level: number;
  counter: number;
}

@Component({
  selector: 'app-third-character-shit',
  templateUrl: './third-character-shit.component.html',
  styleUrls: ['./third-character-shit.component.css'] // Исправлено styleUrl на styleUrls
})
export class ThirdCharacterShitComponent implements OnInit {

  initSpellsByLevel: SpellByLevelData[] = [];
   cantripCounter=13;
  cantripData:string[]=[];
  countersByLevel: { [key: number]: number } = {
    9: 11,
    8: 12,
    7: 13,
    6: 12,
    5: 12,
    4: 19,
    3: 19,
    2: 18,
    1: 18
  };

  ngOnInit() {
    this.initSpellByLevel();
    this.cantripData= Array(this.cantripCounter).fill('');
  }

  initSpellByLevel() {

    const levelOrder = [ 1, 2,3, 4, 5,6, 7, 8, 9];
    levelOrder.forEach(level => {
      const counter = this.countersByLevel[level];
      this.initSpellsByLevel.push({ level, counter });
    });
  }
}
