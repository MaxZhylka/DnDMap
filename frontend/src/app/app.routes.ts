import { Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {CharecterSheetComponent} from "./charecter-sheet/charecter-sheet.component";

export const appRoutes: Routes = [{path:'',component:MapComponent},
  {path:'about',component:CharecterSheetComponent},];
