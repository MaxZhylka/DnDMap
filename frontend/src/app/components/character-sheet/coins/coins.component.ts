import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from "../../../services/character.service";
import { FormControl, FormGroup } from "@angular/forms";
import { map, tap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit, OnDestroy {
  @Input() coinValue!: string;
  @Input() coinName!: string;
  coinForm!: FormGroup;
  subscription = new Subscription();

  constructor(public characterService: CharacterService) { }

  ngOnInit() {
    this.coinForm = new FormGroup({
      coinInput: new FormControl(this.characterService[this.coinName])
    });

    this.subscription.add(
      this.characterService.characterData$.subscribe({
        next: (data) => {
          this.coinForm.get('coinInput')!.setValue(this.characterService[this.coinName], { emitEvent: false });
        }
      })
    );

    this.subscription.add(
      this.coinForm.get('coinInput')!.valueChanges.pipe(
        map(value => value ? value.toString().replace(/[^0-9]/g, '') : ''),
        tap(cleanedValue => {
          this.coinForm.get('coinInput')!.setValue(cleanedValue, { emitEvent: false });
          this.characterService[this.coinName] = parseInt(cleanedValue, 10) || 0;
        })
      ).subscribe()
    );
  }

  ChangeCurrent() {
    const coinInputControl = this.coinForm.get('coinInput');
    const value = coinInputControl?.value;

    if (!value || this.characterService[this.coinName] == null) {
      coinInputControl?.setValue("0");
      this.characterService[this.coinName] = 0;
    } else {
      this.characterService[this.coinName] = parseInt(value, 10);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
