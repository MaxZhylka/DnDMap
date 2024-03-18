import { NgModule } from "@angular/core";
import {Routes} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MapService } from "../../services/map.service";
import {MapComponent} from "../../components/map-sheet/map-sheet/map.component";
import {MapHeaderComponent} from "../../components/map-sheet/map-header/map-header.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { FormsModule} from "@angular/forms";
import {CitisElLiComponent} from "../../components/map-sheet/citis-el-li/citis-el-li.component";
import {NgForOf} from "@angular/common";
import {NewsComponent} from "../../components/map-sheet/news/news.component";
import {NewsPanelComponent} from "../../components/map-sheet/news-panel/news-panel.component";

@NgModule({
  declarations: [
    MapComponent,
    MapHeaderComponent,
    CitisElLiComponent,
    NewsComponent,
    NewsPanelComponent
  ],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        NgOptimizedImage
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

export class MapModule { }
