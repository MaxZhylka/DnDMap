import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.css'
})
export class SkillBarComponent {
  skillText: string[] = ['Акробатика', 'Атлетика', 'Восприятие', 'Выживание', 'Выступление', 'Запугивание','История','Ловкость Рук','Магия','Медицина','Обман','Природа','Проницательность','Расследование','Религия','Скрытность','Убеждение','Уход за животными'];
   skillID:string[]=['dexterity',
     'strength',
     'wisdom',
     'wisdom',
     'charisma',
     'charisma',
     'intelligence',
     'dexterity',
     'intelligence',
     'wisdom',
     'charisma',
     'intelligence',
     'wisdom',
     'intelligence',
     'wisdom',
     'dexterity',
     'charisma',
     'wisdom']
 skillNames = [
   'acrobatic',
  'athletics',
  'perception',
  'survival',
  'performance',
  'intimidation',
  'history',
  'sleightOfHand',
  'arcane',
  'medicine',
  'deception',
  'nature',
  'insight',
  'investigation',
  'religion',
  'stealth',
  'persuasion',
  'animalHandling'
];
}
