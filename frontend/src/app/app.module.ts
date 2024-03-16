import { NgModule } from "@angular/core";
import {Routes} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MapService } from "./services/map.service";
import {MapComponent} from "./components/map-sheet/map-sheet/map.component";
import {MapHeaderComponent} from "./components/map-sheet/map-header/map-header.component";


import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MapComponent,
    MapHeaderComponent,
  ],
    imports: [
        HttpClientModule,
        FormsModule,
    ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent,

  ],
  bootstrap: [
    MapComponent,

  ]
})

export class AppModule { }
