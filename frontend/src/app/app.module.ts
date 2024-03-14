import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import * as L from 'leaflet'
import { MapService } from "./services/map.service";
import {MapComponent} from "./map/map.component";

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [

    HttpClientModule,

 ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent,

  ],
  bootstrap: [
    MapComponent
  ]
})

export class AppModule { }
