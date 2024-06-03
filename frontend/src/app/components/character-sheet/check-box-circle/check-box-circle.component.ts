import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-check-box-circle',
  templateUrl: './check-box-circle.component.html',
  styleUrls: ['./check-box-circle.component.css']
})
export class CheckBoxCircleComponent implements OnInit, OnChanges {
  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirthree.png';
  currentImage: string = this.inspirOne;

  @Input() id: number = -1;
  @Output() toggleChange = new EventEmitter<boolean>();
  @Output() toggleChangeId = new EventEmitter<{ toggle: boolean, id: number }>();

  @Input() _toggle: boolean = false;

  ngOnInit() {
    this.updateImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['_toggle']) {
      this.updateImage();

    }
  }

  get toggle(): boolean {
    return this._toggle;
  }

  set toggle(value: boolean) {
    this._toggle = value;
    if (this.id != -1) {
      this.toggleChangeId.emit({ toggle: this._toggle, id: this.id });
      return;
    } else {
      this.toggleChange.emit(this._toggle);
    }
  }

  toggleImage() {
    this.toggle = !this.toggle; // Это вызовет setter и отправит событие
  }

  private updateImage() {
    this.currentImage = this._toggle ? this.inspirTwo : this.inspirOne;

  }
}
