import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
import {OwnershipComponent} from "../../components/character-sheet/ownership/ownership.component";
import {ArmorComponent} from "../../components/character-sheet/armor/armor.component";
import {AcHealthSpeedComponent} from "../../components/character-sheet/ac-health-speed/ac-health-speed.component";
import {InitiativeComponent} from "../../components/character-sheet/initiative/initiative.component";
import {SpeedComponent} from "../../components/character-sheet/speed/speed.component";
import {
  SecondCharacterSheetComponent
} from "../../components/second-character-sheet/second-character-sheet/second-character-sheet.component";
import {SecondHeaderComponent} from "../../components/second-character-sheet/second-header/second-header.component";
import {TemporaryHitsComponent} from "../../components/character-sheet/temporary-hits/temporary-hits.component";
import {CurrentHitsComponent} from "../../components/character-sheet/current-hits/current-hits.component";
import {HitDiceComponent} from "../../components/character-sheet/hit-dice/hit-dice.component";
import {CheckBoxCircleComponent} from "../../components/character-sheet/check-box-circle/check-box-circle.component";
import {AttackSpellsComponent} from "../../components/character-sheet/attack-spells/attack-spells.component";
import {AttacksComponent} from "../../components/character-sheet/attacks/attacks.component";
import {
  CalcAttackSplellsComponent
} from "../../components/character-sheet/calc-attack-splells/calc-attack-splells.component";
import {
  AlliesAndTreasureComponent
} from "../../components/second-character-sheet/allies-and-treasure/allies-and-treasure.component";
import {ImageCropperModule} from "ngx-image-cropper";
import {PhotoCropperComponent} from "../../components/second-character-sheet/photo-cropper/photo-cropper.component";


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
    PassivePerceptionComponent,
    OwnershipComponent,
    ArmorComponent,
    AcHealthSpeedComponent,
    InitiativeComponent,
    SpeedComponent,
    SecondCharacterSheetComponent,
    SecondHeaderComponent,
    CurrentHitsComponent,
    HitDiceComponent,
    CheckBoxCircleComponent,
    AttackSpellsComponent,
    AttacksComponent,
    CalcAttackSplellsComponent,
     AlliesAndTreasureComponent,
    PhotoCropperComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TemporaryHitsComponent,
        ImageCropperModule,
        NgOptimizedImage

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
    PassivePerceptionComponent,
    OwnershipComponent,
    ArmorComponent,
    AcHealthSpeedComponent,
    InitiativeComponent,
    SpeedComponent,
    SecondCharacterSheetComponent,
     AlliesAndTreasureComponent,
    PhotoCropperComponent

  ],
  providers:[CharacterService]
})
export class CharacterSheetModule { }
