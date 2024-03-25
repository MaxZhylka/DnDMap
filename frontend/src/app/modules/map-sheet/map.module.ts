import { NgModule } from "@angular/core";
import {Routes} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MapService } from "../../services/map.service";
import {MapComponent} from "../../components/map-sheet/map-sheet/map.component";
import {MapHeaderComponent} from "../../components/map-sheet/map-header/map-header.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { FormsModule} from "@angular/forms";
import {CitisElLiComponent} from "../../components/map-sheet/citis-el-li/citis-el-li.component";
import {NewsComponent} from "../../components/map-sheet/news/news.component";
import {NewsPanelComponent} from "../../components/map-sheet/news-panel/news-panel.component";
import {ClickOutsideDirective} from "../../Directives/click-outside.directive";
import {OpendNewsComponent} from "../../components/map-sheet/opend-news/opend-news.component";

@NgModule({
  declarations: [
    MapComponent,
    MapHeaderComponent,
    CitisElLiComponent,
    NewsComponent,
    NewsPanelComponent,
    ClickOutsideDirective,
    OpendNewsComponent
  ],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        NgOptimizedImage,

    ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent,
    ClickOutsideDirective
  ],
  bootstrap: [
    MapComponent,

  ]
})

export class MapModule { }
