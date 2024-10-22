import { Routes } from '@angular/router';
import {MapComponent} from "./components/map-sheet/map-sheet/map.component";
import {CharacterSheetComponent} from "./components/character-sheet/character-sheet/character-sheet.component";
import {NgModule} from "@angular/core";
import {MainComponent} from "./components/sign-up-log-in/main/main.component";
import {AuthGuard} from "./services/authGuard.service";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {CharactersListsModule} from "./modules/characters-lists/characters-lists.module";
import {GeneralSheetComponent} from "./components/character-lists/general-sheet/general-sheet.component";



export const appRoutes: Routes = [{path:'',component:MapComponent, canActivate: [AuthGuard]},
  {path:'registration/character',component:CharacterSheetComponent,  canActivate: [AuthGuard]},
  {path:'character-list',component:GeneralSheetComponent, canActivate: [AuthGuard]},
  {path:'profile',component:UserProfileComponent,  canActivate:[AuthGuard]},
  {path:'registration',component:MainComponent},
  {path:'login',component:MainComponent},
  { path: 'character-list/:id', component: CharacterSheetComponent, canActivate: [AuthGuard] }];

