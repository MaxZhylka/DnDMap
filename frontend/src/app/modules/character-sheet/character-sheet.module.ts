import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterSheetComponent} from "../../components/character-sheet/character-sheet/character-sheet.component";
import {CharacterHeaderComponent} from "../../components/character-sheet/character-header/character-header.component";
import {AbilityComponent} from "../../components/character-sheet/ability/ability.component";
import {AbilityBarComponent} from "../../components/character-sheet/ability-bar/ability-bar.component";


@NgModule({
  declarations: [
    CharacterSheetComponent,
    CharacterHeaderComponent,
    AbilityComponent,
    AbilityBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CharacterSheetComponent,
    CharacterHeaderComponent,
    AbilityComponent,
    AbilityBarComponent
  ]
})
export class CharacterSheetModule { }
