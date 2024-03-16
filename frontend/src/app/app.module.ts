import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import * as L from 'leaflet'
import { MapService } from "./services/map.service";
import {MapComponent} from "./map/map.component";
import {CharecterSheetComponent} from "./charecter-sheet/charecter-sheet.component";
import {CharecterHeaderComponent} from "./charecter-header/charecter-header.component";

const appRoutes:Routes =[
  {path:'',component:MapComponent},
  {path:'about',component:CharecterSheetComponent},]
@NgModule({
  declarations: [
    MapComponent,
    CharecterSheetComponent,
    CharecterHeaderComponent
  ],
  imports: [

    HttpClientModule,
 ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent,
    CharecterSheetComponent,
    CharecterHeaderComponent,
  ],
  bootstrap: [
    MapComponent,
    CharecterSheetComponent,
    CharecterHeaderComponent
  ]
})

export class AppModule { }
