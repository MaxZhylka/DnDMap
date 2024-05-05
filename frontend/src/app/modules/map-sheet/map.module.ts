import { NgModule } from "@angular/core";
import {Routes} from "@angular/router";
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
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
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AuthGuard} from "../../services/authGuard.service";
registerLocaleData(localeRu);
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
    MapService,
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: 'ru' }
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
