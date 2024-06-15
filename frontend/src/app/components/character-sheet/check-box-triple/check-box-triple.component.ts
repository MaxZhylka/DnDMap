import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-check-box-triple',
  standalone: true,
  imports: [],
  templateUrl: './check-box-triple.component.html',
  styleUrls: ['./check-box-triple.component.css']
})
export class CheckBoxTripleComponent implements OnInit, OnChanges {
  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirtwo.png';
  inspirThree: string = '../../../assets/img/inspirthree.png';
  currentImage: string = this.inspirOne;

  @Output() toggleChange = new EventEmitter<number>();
  @Input() _toggle: number = 0;

  ngOnInit() {
    this.updateImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['_toggle']) {
      this.updateImage();
    }
  }

  get toggle(): number {
    return this._toggle;
  }

  set toggle(value: number) {
    this._toggle = value;
    this.toggleChange.emit(this._toggle);
  }

  toggleImage() {
    if (this.toggle === 0) {
      this.currentImage = this.inspirTwo;
      this.toggle = 1;
    } else if (this.toggle === 1) {
      this.currentImage = this.inspirThree;
      this.toggle = 2;
    } else if (this.toggle === 2) {
      this.currentImage = this.inspirOne;
      this.toggle = 0;
    }
  }

  private updateImage() {
    if (this._toggle === 1) {
      this.currentImage = this.inspirTwo;
           this.toggleChange.emit(this._toggle);
    } else if (this._toggle === 2) {
      this.currentImage = this.inspirThree;
           this.toggleChange.emit(this._toggle);
    } else {
      this.currentImage = this.inspirOne;
           this.toggleChange.emit(this._toggle);
    }
  }
}
