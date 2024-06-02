import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent implements OnInit{
  @Input() text: string = '';
  @Input() id: string = '';
  @Input() abilitysave: string = '';
  @Input() skillsName:string='';

  toggle: number =0;

  ngOnInit() {
    this.toggle=this.characterService[this.skillsName];
  }

  constructor(protected characterService: CharacterService) {
  }


  handleToggleChange(toggle: number) {
    this.toggle = toggle;
    this.setSkills();
    console.log(this.characterService[this.skillsName]);
  }

  get calculateSavingThrow(): string {
    if(this.toggle==2)
    {
      let proficiency: number = Math.floor((this.characterService.level - 1) / 4 + 2)*2;
      let modificator: number = Math.floor((this.characterService[this.id] - 10) / 2)
      let result = modificator + proficiency;
      if (result > 0)
        return '+' + result;
      else return '' + result;
    }
    if(this.toggle==1) {
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
      if (modificator > 0) return '+' + modificator;
        else return '' + modificator;
    }
  }

setSkills():void{

    this.characterService[this.skillsName]= this.toggle;

};
};
