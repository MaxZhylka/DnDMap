import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {FormControl, FormGroup} from "@angular/forms";
import {map} from "rxjs/operators";
import {tap} from "rxjs";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.css'
})
export class CoinsComponent implements OnInit {
  @Input() coinValue!: string;
  @Input() coinName!: string;
  coinForm!: FormGroup;


  constructor(public characterService:CharacterService) {

}
  ngOnInit() {

    this.coinForm = new FormGroup({
      coinInput: new FormControl(this.characterService[this.coinName])
    });


    this.coinForm.get('coinInput')!.valueChanges.pipe(
      map(value => value.replace(/[^0-9]/g, '')), // Удаляет все, кроме цифр
      tap(cleanedValue => {

        this.coinForm.get('coinInput')!.setValue(cleanedValue, {emitEvent: false});
        this.characterService[this.coinName] = parseInt(this.coinForm.get('coinInput')?.value, 10);
      })
    ).subscribe();

  }

  ChangeCurrent() {
    if (this.coinForm.get('coinInput')?.value == "" || this.characterService[this.coinName] == null) {
      this.coinForm.get('coinInput')?.setValue("0");
      this.characterService[this.coinName] = 0;
    } else {
      this.characterService[this.coinName] = parseInt(this.coinForm.get('coinInput')?.value, 10);
    }
  }
}



