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
    9: 10,
    8: 11,
    5: 12,
    7: 12,
    4: 18,
    2: 18,
    6: 12,
    3: 18,
    1: 18
  };

  ngOnInit() {
    this.initSpellByLevel();
    this.cantripData= Array(this.cantripCounter).fill('');
  }

  initSpellByLevel() {

    const levelOrder = [ 3, 6,1, 4, 7,2, 5, 8, 9];
    levelOrder.forEach(level => {
      const counter = this.countersByLevel[level];
      this.initSpellsByLevel.push({ level, counter });
    });
  }
}
