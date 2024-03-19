import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterSheetComponent} from "../../components/character-sheet/character-sheet/character-sheet.component";
import {CharacterHeaderComponent} from "../../components/character-sheet/character-header/character-header.component";
import {AbilityComponent} from "../../components/character-sheet/ability/ability.component";
import {AbilityBarComponent} from "../../components/character-sheet/ability-bar/ability-bar.component";
import {HeadContentComponent} from "../../components/character-sheet/head-content/head-content.component";
import {PersonalTraitsComponent} from "../../components/character-sheet/personal-traits/personal-traits.component";
import {
  PersonalTraitsBarComponent
} from "../../components/character-sheet/personal-traits-bar/personal-traits-bar.component";
import {InspirationComponent} from "../../components/character-sheet/inspiration/inspiration.component";
import {FunctionsComponent} from "../../components/character-sheet/functions/functions.component";
import {ProfsheetComponent} from "../../components/character-sheet/profsheet/profsheet.component";
import {FormsModule} from "@angular/forms";
import {CharacterService} from "../../services/character.service";


@NgModule({
  declarations: [
    CharacterSheetComponent,
    CharacterHeaderComponent,
    AbilityComponent,
    AbilityBarComponent,
    HeadContentComponent,
    PersonalTraitsComponent,
    PersonalTraitsBarComponent,
    InspirationComponent,
    FunctionsComponent,
    ProfsheetComponent

  ],
    imports: [
        CommonModule,
        FormsModule,


    ],
  exports:[
    CharacterSheetComponent,
    CharacterHeaderComponent,
    AbilityComponent,
    AbilityBarComponent,
    HeadContentComponent,
    PersonalTraitsComponent,
    PersonalTraitsBarComponent,
    InspirationComponent,
    FunctionsComponent,
    ProfsheetComponent
  ],
  providers:[CharacterService]
})
export class CharacterSheetModule { }
