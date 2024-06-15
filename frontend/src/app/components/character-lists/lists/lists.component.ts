import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {CharacterService} from "../../../services/character.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  @Input() id!:number;
  constructor(private router: Router,private characterService:CharacterService) {
  }
redirectToCharacterCreation() {


    this.characterService.setData(this.characterService.defaultValues);
    this.characterService.initializeSpellData();

    this.characterService.createCharacter(this.characterService.collectCharacterData()).subscribe(
      {
        next:(data)=>
        {
          console.log(data);
        },
        error:(data)=>
        {
          console.log(data);
        }
      }
    )
    this.router.navigate(['/character-list/'+this.id]);
}
}
