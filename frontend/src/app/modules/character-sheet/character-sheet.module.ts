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
import {SavingThrowsSkillsBarComponent} from "../../components/character-sheet/savingThrows-skills-bar/savingThrows-skills-bar.component";
import {ProfsheetComponent} from "../../components/character-sheet/profsheet/profsheet.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CharacterService} from "../../services/character.service";
import {SavingthrowBarComponent} from "../../components/character-sheet/savingthrow-bar/savingthrow-bar.component";
import {SavingthrowComponent} from "../../components/character-sheet/savingthrow/savingthrow.component";
import {SkillComponent} from "../../components/character-sheet/skill/skill.component";
import {SkillBarComponent} from "../../components/character-sheet/skill-bar/skill-bar.component";
import {
  PassivePerceptionComponent
} from "../../components/character-sheet/passive-perception/passive-perception.component";


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
    SavingThrowsSkillsBarComponent,
    ProfsheetComponent,
    SavingthrowComponent,
    SavingthrowBarComponent,
    SkillComponent,
    SkillBarComponent,
    PassivePerceptionComponent

  ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule

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
    SavingThrowsSkillsBarComponent,
    ProfsheetComponent,
    SkillComponent,
    SkillBarComponent,
    PassivePerceptionComponent

  ],
  providers:[CharacterService]
})
export class CharacterSheetModule { }
