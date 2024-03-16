import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {AppModule} from "./app/app.module";
import * as L from 'leaflet';
import {CharecterSheetComponent} from "./app/charecter-sheet/charecter-sheet.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(CharecterSheetComponent, appConfig)
  .catch((err) => console.error(err));
