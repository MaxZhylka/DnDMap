import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralSheetComponent} from "../../components/character-lists/general-sheet/general-sheet.component";
import {ListsComponent} from "../../components/character-lists/lists/lists.component";



@NgModule({
  declarations: [GeneralSheetComponent,ListsComponent],
  imports: [
    CommonModule
  ]
})
export class CharactersListsModule { }
