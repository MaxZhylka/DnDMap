import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CharacterService } from "../../../services/character.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() text: string = '';
  @Input() id: string = '';
  @Input() abilitysave: string = '';
  @Input() skillsName: string = '';

  toggle: number = 0;

  constructor(protected characterService: CharacterService) { }

  ngOnInit() {
    this.toggle = this.characterService[this.skillsName];
  }



  handleToggleChange(toggle: number) {
    this.toggle = toggle;
    this.setSkills();
  }

  get calculateSavingThrow(): string {
    let proficiency: number = Math.floor((this.characterService.level - 1) / 4 + 2);
    let modificator: number = Math.floor((this.characterService[this.id] - 10) / 2);
    let result: number;

    if (this.toggle == 2) {
      proficiency *= 2;
      result = modificator + proficiency;
    } else if (this.toggle == 1) {
      result = modificator + proficiency;
    } else {
      result = modificator;
    }

    return result > 0 ? '+' + result : '' + result;
  }

  setSkills(): void {
    this.characterService[this.skillsName] = this.toggle;
  }
}
