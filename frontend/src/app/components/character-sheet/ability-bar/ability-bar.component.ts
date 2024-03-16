import { Component } from '@angular/core';

@Component({
  selector: 'app-ability-bar',
  templateUrl: './ability-bar.component.html',
  styleUrl: './ability-bar.component.css'
})
export class AbilityBarComponent {
  attributes:string[]= ['Сила', 'Ловкость', 'Телосложение', 'Интеллект', 'Мудрость', 'Харизма'];
}
