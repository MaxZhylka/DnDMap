import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";
import { CharacterService } from "../../../services/character.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-current-hits',
  templateUrl: './current-hits.component.html',
  styleUrls: ['./current-hits.component.css']
})
export class CurrentHitsComponent implements OnInit, OnDestroy {
  currentHits: FormGroup;
  subscription= new Subscription();

  constructor(private characterService: CharacterService) {
    this.currentHits = new FormGroup({
      maxHits: new FormControl(this.characterService.hitPointsMax),
      currentHits: new FormControl(this.characterService.hitPoints)
    });
  }

  ChangeMax() {
    if (this.currentHits.get('maxHits')?.value == "") {
      this.currentHits.get('maxHits')?.setValue("1");
      this.characterService.hitPointsMax = 1;
    } else {
      this.characterService.hitPointsMax = parseInt(this.currentHits.get('maxHits')?.value, 10);
    }
  }

  ChangeCurrent() {
    if (this.currentHits.get('currentHits')?.value == "") {
      this.currentHits.get('currentHits')?.setValue("0");
      this.characterService.hitPoints = 0;
    } else {
      this.characterService.hitPoints = parseInt(this.currentHits.get('currentHits')?.value, 10);
    }
  }


  ngOnInit() {
    this.subscription= this.characterService.characterData$.subscribe({
      next:(data)=>
      {
        this.currentHits.get('currentHits')?.setValue(data.hitPoints)  ;
        this.currentHits.get('maxHits')?.setValue(data.hitPointsMax)  ;
      }
    })
    this.subscribeCurrentHit();
    this.subscribeMaxHit();
  }
ngOnDestroy() {
    this.subscription.unsubscribe();
}

  subscribeMaxHit() {
    this.currentHits.get("maxHits")?.valueChanges.pipe(
      tap(maxHits => {
        const maxHitsValue = parseInt(maxHits);
        if (/^\d+$/.test(maxHits) || maxHits == "") {
          const currentHits = this.currentHits.get("currentHits")?.value;
          if (maxHitsValue < 1) {
            this.currentHits.get("maxHits")?.setValue(1, { emitEvent: false });
            this.characterService.hitPointsMax = 1;
          } else {
            this.characterService.hitPointsMax = maxHitsValue;
          }

          if (currentHits > maxHitsValue) {
            this.currentHits.get("currentHits")?.setValue(1, { emitEvent: false });
            this.characterService.hitPoints = 1;
          }
        } else {
          this.currentHits.get("maxHits")?.setValue(1, { emitEvent: false });
          this.characterService.hitPointsMax = 1;
        }
      })
    ).subscribe();
  }

  subscribeCurrentHit() {
    this.currentHits.get("currentHits")?.valueChanges.pipe(
      tap(currentHits => {
        const currentHitsValue = parseInt(currentHits);
        if (/^\d+$/.test(currentHits) || currentHits == "") {
          const maxHits = this.currentHits.get("maxHits")?.value;
          if (currentHitsValue < 0 || currentHits == '00') {
            this.currentHits.get("currentHits")?.setValue(1, { emitEvent: false });
            this.characterService.hitPoints = 1;
          } else if (currentHitsValue > maxHits) {
            this.currentHits.get("currentHits")?.setValue(maxHits, { emitEvent: false });
            this.characterService.hitPoints = maxHits;
          } else {
            this.characterService.hitPoints = currentHitsValue;
          }
        } else {
          this.currentHits.get("currentHits")?.setValue(1, { emitEvent: false });
          this.characterService.hitPoints = 1;
        }
      })
    ).subscribe();
  }
}
