import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {attackData} from '../attacks/attacks.component'
@Component({
  selector: 'app-calc-attack-splells',
  templateUrl: './calc-attack-splells.component.html',
  styleUrl: './calc-attack-splells.component.css'
})
export class CalcAttackSplellsComponent {
characteristics = [
    { value: '0', display: 'Без Характеристики' },
    { value: 'strength', display: 'Сила' },
    { value: 'dexterity', display: 'Ловкость' },
    { value: 'constitution', display: 'Телосложение' },
    { value: 'intelligence', display: 'Интеллект' },
    { value: 'wisdom', display: 'Мудрость' },
    { value: 'charisma', display: 'Харизма' }
  ];



display:boolean=false;

@Input() data!:attackData;
  @Output() close = new EventEmitter<void>;
  @Output() requestDelete = new EventEmitter<void>();
  onClose()
  {

    this.close.emit();
  }
  deleteComponent()
  {

    this.requestDelete.emit();
     this.close.emit();
  }
get displayCheckBox()
{
  if(this.data.characteristic=="0")
  {
    this.data.proficiency=false;
  }
  return this.data.characteristic != '0';

}



}
