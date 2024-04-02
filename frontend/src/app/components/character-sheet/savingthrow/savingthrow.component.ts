import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-savingthrow',
  templateUrl: './savingthrow.component.html',
  styleUrl: './savingthrow.component.css'
})
export class SavingthrowComponent {
  @Input() text: string = '';
  @Input() id: string = '';
  @Input() abilitysave: string = '';

  inspirOne: string = '../../../assets/img/inspirone.png';
  inspirTwo: string = '../../../assets/img/inspirtwo.png';
  currentImage: string = this.inspirOne;
  toggle: boolean = false;

  constructor(private characterService: CharacterService) {
  }

  toggleImage() {
    this.currentImage = (this.currentImage === this.inspirOne) ? this.inspirTwo : this.inspirOne;
    if (!this.toggle) {
      this.toggle = true;

    } else {
      this.toggle = false;
    }
  }

  get calculateSavingThrow(): string {
    if(this.toggle) {
      let proficiency: number = Math.floor((this.characterService.level - 1) / 4 + 2);
      let modificator: number = Math.floor((this.characterService[this.id] - 10) / 2)
      let result = modificator + proficiency;
      if (result > 0)
        return '+' + result;
      else return '' + result;
    }
    else
    {
        let modificator: number = Math.floor((this.characterService[this.id] - 10) / 2)
    if (modificator > 0)
      return '+' + modificator;
    else return '' + modificator;
    }
  }
  handleToggleChange(toggle: boolean) {
    this.toggle = toggle;

  }


}
