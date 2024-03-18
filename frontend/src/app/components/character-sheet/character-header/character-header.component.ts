import { Component } from '@angular/core';

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrl: './character-header.component.css'
})
export class CharacterHeaderComponent {
headId:string[]=['characterClass','characterBackstory','characterRace','worldviews','experience','level'];
headText:string[]=['КЛАСС','ПРЕДЫСТОРИЯ','РАСА','МИРОВОЗРЕНИЕ','ОПЫТ','УРОВЕНЬ']
}
