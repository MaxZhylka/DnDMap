import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-box-triple',
  standalone: true,
  imports: [],
  templateUrl: './check-box-triple.component.html',
  styleUrl: './check-box-triple.component.css'
})
export class CheckBoxTripleComponent implements  OnInit{
  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirtwo.png';
  inspirThree: string = '../../../assets/img/inspirthree.png';
  currentImage: string = this.inspirOne;
   @Output() toggleChange = new EventEmitter<number>();
    @Input() _toggle: number = 0;


    ngOnInit()
    {
      if(this.toggle==1)
      {
        this.currentImage=this.inspirTwo;

      }
      else if(this.toggle==2)
      {
        this.currentImage=this.inspirThree;
      }
      else
      {
        this.currentImage=this.inspirOne;
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
   if(this.toggle==0)
   {
     this.currentImage=this.inspirTwo;
     this.toggle=1;
     return;
   }
   if(this.toggle==1)
   {
     this.toggle=2;
     this.currentImage=this.inspirThree
      return;
   }
   if(this.toggle==2)
   {
     this.toggle=0;
     this.currentImage=this.inspirOne;
      return;
   }

  }

}
