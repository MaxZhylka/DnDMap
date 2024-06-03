import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralSheetComponent} from "../../components/character-lists/general-sheet/general-sheet.component";
import {ListsComponent} from "../../components/character-lists/lists/lists.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ListsHeaderComponent} from "../../components/character-lists/lists-header/lists-header.component";
import {MapModule} from "../map-sheet/map.module";
import {OneCharacterComponent} from "../../components/character-lists/one-character/one-character.component";



@NgModule({
  declarations: [GeneralSheetComponent, ListsComponent, ListsHeaderComponent,OneCharacterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MapModule
  ],
  exports: [
    GeneralSheetComponent
  ]
})
export class CharactersListsModule { }
