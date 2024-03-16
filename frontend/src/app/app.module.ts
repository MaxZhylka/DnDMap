import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { MapService } from "./services/map.service";
import {MapComponent} from "./components/map/map.component";
import {MapHeaderComponent} from "./components/map-header/map-header.component";

import {AbilityComponent} from "./components/ability/ability.component";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MapComponent,
    MapHeaderComponent,
    AbilityComponent
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
    AbilityComponent

  ],
  bootstrap: [
    MapComponent,

  ]
})

export class AppModule { }
