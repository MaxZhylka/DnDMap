import {Component, ElementRef, Input, ViewChild} from '@angular/core';

import {MapService} from "../../../services/map.service";

interface City
{
  name:string;
  coordinates: string;
  disciption: string;

}
@Component({
  selector: 'app-citis-el-li',
  templateUrl: './citis-el-li.component.html',
  styleUrl: './citis-el-li.component.css'

})
export class CitisElLiComponent {

 @Input() city!: City;
 @Input() ResetFunction!: Function;
 constructor(private mapService: MapService) { }
  FlyTO=()=>
  {
      this.ResetFunction();
     this.mapService.flyTo(this.city.coordinates);
  }
}
