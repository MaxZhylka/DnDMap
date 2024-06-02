import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-box-circle',
  templateUrl: './check-box-circle.component.html',
  styleUrl: './check-box-circle.component.css'
})
export class CheckBoxCircleComponent implements OnInit{
  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirthree.png';
  currentImage: string = this.inspirOne;
   @Input() id:number=-1;
   @Output() toggleChange = new EventEmitter<boolean>();
    @Output() toggleChangeId = new EventEmitter<{toggle:boolean, id:number}>();

   @Input() _toggle: boolean = false;

  ngOnInit() {
    if(this.toggle)
    {
      this.currentImage=this.inspirTwo;

    }
    else
    {
      this.currentImage=this.inspirOne;
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
    this.currentImage = (this.currentImage === this.inspirOne) ? this.inspirTwo : this.inspirOne;
    this.toggle = !this.toggle; // Это вызовет setter и отправит событие
  }


}
