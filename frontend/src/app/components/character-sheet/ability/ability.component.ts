import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs";


@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit{
  @Input() formHead!: FormGroup;
  @Input() attribute: string = '';
  @Input() headID: string="";
  index: string = '10';
  modifire: string = this.calculateModifire(parseInt(this.index));

  constructor() {



    }

 ngOnInit() {

     this.formHead.get(this.headID)?.valueChanges.pipe(
      tap(level => {
        const numLevel = parseInt(level);

        if (numLevel < 1 || numLevel > 30|| isNaN(numLevel)) {
          let correctedLevel:number;
          if(!isNaN(numLevel)) {
           correctedLevel = Math.min(Math.max(numLevel, 1), 30);
          }else
          {
            correctedLevel=1;
          }
          this.formHead.get(this.headID)?.setValue(correctedLevel, { emitEvent: false });
        }
      })
    ).subscribe();
 }


  calculateModifire(value: number) {
    let modificator= Math.floor((value - 10) / 2);
    if(modificator>0)
    {
      return '+'+modificator;
    }
    return JSON.stringify(modificator);
  }

  protected readonly FormControl = FormControl;
}
