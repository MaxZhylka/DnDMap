import { Routes } from '@angular/router';
import {MapComponent} from "./components/map-sheet/map-sheet/map.component";
import {CharacterSheetComponent} from "./components/character-sheet/character-sheet/character-sheet.component";

import {MainComponent} from "./components/sign-up-log-in/main/main.component";
import {AuthGuard} from "./services/authGuard.service";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";



export const appRoutes: Routes = [{path:'map',component:MapComponent, canActivate: [AuthGuard]},
  {path:'registration/character',component:CharacterSheetComponent,  canActivate: [AuthGuard]},
  {path:'profile',component:UserProfileComponent,  canActivate:[AuthGuard]},
  {path:'',component:MainComponent}];
