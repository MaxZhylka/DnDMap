import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-current-hits',
  templateUrl: './current-hits.component.html',
  styleUrl: './current-hits.component.css'
})
export class CurrentHitsComponent implements OnInit{
  currentHits: FormGroup = new FormGroup({
    maxHits: new FormControl(1),
    currentHits: new FormControl(0)
  });

  ChangeMax()
  {
  if(this.currentHits.get('maxHits')?.value=="")
    {
      this.currentHits.get('maxHits')?.setValue("1");
    }
  }
  ChangeCurrent()
  {
    if(this.currentHits.get('currentHits')?.value=="")
    {
      this.currentHits.get('currentHits')?.setValue("0");
    }
  }
  ngOnInit() {
  this.subscribeCurrentHit();
  this.subscribeMaxHit();
  }

  subscribeMaxHit()
  {
    this.currentHits.get("maxHits")?.valueChanges.pipe(
  tap(maxHits => {
     const maxHitsValue= parseInt(maxHits);
    if (( /^\d+$/.test(maxHits)) || maxHits =="") {

        const currentHits = this.currentHits.get("currentHits")?.value;
        if ( maxHitsValue < 1) {
          this.currentHits.get("maxHits")?.setValue(1, { emitEvent: false });
        }
        if (currentHits >  maxHitsValue) {
          this.currentHits.get("currentHits")?.setValue(1, { emitEvent: false });
        }
      } else {
      this.currentHits.get("maxHits")?.setValue(1, { emitEvent: false });
    }

  })
).subscribe();
  }
  subscribeCurrentHit()
  {
     this.currentHits.get("currentHits")?.valueChanges.pipe(
  tap(currentHits => {
    const currentHitsValue= parseInt(currentHits);
    if ( /^\d+$/.test(currentHits) || currentHits =="") {

        const maxHits = this.currentHits.get("maxHits")?.value;
        if ( currentHitsValue < 0||currentHits=='00') {
          this.currentHits.get("currentHits")?.setValue(1, { emitEvent: false });
        }
        if ( currentHitsValue > maxHits) {
          this.currentHits.get("currentHits")?.setValue(maxHits, { emitEvent: false });
        }

    }
    else {
      this.currentHits.get("currentHits")?.setValue(1, { emitEvent: false });
    }

  })
).subscribe();
  }

}
