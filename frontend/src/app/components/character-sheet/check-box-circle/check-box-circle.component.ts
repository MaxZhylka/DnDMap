import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-check-box-circle',
  templateUrl: './check-box-circle.component.html',
  styleUrl: './check-box-circle.component.css'
})
export class CheckBoxCircleComponent {
  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirtwo.png';
  currentImage: string = this.inspirOne;
   @Output() toggleChange = new EventEmitter<boolean>();
  private _toggle: boolean = false;



  get toggle(): boolean {
    return this._toggle;
  }

  set toggle(value: boolean) {
    this._toggle = value;
    // Отправляем значение toggle в родительский компонент
    this.toggleChange.emit(this._toggle);
  }

  toggleImage() {
    this.currentImage = (this.currentImage === this.inspirOne) ? this.inspirTwo : this.inspirOne;
    this.toggle = !this.toggle; // Это вызовет setter и отправит событие
  }


}
