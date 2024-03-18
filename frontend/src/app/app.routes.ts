import { Routes } from '@angular/router';
import {MapComponent} from "./components/map-sheet/map-sheet/map.component";
import {CharacterSheetComponent} from "./components/character-sheet/character-sheet/character-sheet.component";
import {AppComponent} from "./app.component";


export const appRoutes: Routes = [{path:'map',component:MapComponent},
  {path:'registration/character',component:CharacterSheetComponent},
{path:'about',component:AppComponent},];
