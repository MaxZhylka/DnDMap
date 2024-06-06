import {Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, inject} from '@angular/core';
import { MapService } from "../../../services/map.service";
import { isPlatformBrowser } from '@angular/common';
import {forkJoin} from "rxjs";
import * as L from "leaflet";
import {fadeInOut, fadeInOutImg, slideInOutAnimation} from "../../../animations/slideInOut";
declare const ShortestWay: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css','../../../../../node_modules/leaflet/dist/leaflet.css'],
  animations:[slideInOutAnimation, fadeInOut,fadeInOutImg]
})
export class MapComponent implements OnInit {
  cities: any = [];
  roadsData: any=[];
  chosenRoads: any=[];
  roadsCoordinates: any=[];
  image: string = "assets/Test2.jpg";
   map: any;
   isSidebarOpen:boolean=false;
  showLeaflet = false;
  platformId = inject(PLATFORM_ID);
  selectedCity:any;
  ShortWay: any;
  isCity:boolean=true;
   isAnim: boolean=true;
  constructor(private apiMap: MapService) { this.ShortWay= new ShortestWay(this.roadsCoordinates,0,0)

  }


 ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    forkJoin({
      roads: this.apiMap.getRoads(),
      cities: this.apiMap.getCities()
    }).subscribe({
      next: ({ roads, cities }) => {
        this.roadsData = roads;
        this.cities = cities;
        this.initMap();
      },
      error: (error) => console.error('Ошибка при загрузке данных:', error)
    });
  }

}

 private initMap(): void {
  import('leaflet').then((L) => {
    this.map = L.map('map', {
      crs: L.CRS.Simple, zoomControl: false, attributionControl: false, zoomAnimation: true
    });

    let bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(1061, 1587));
    L.imageOverlay(this.image, bounds).addTo(this.map);
    this.map.fitBounds(bounds);
    this.map.setMaxBounds(bounds);
    this.map.maxBounds = bounds;
    this.map.maxBoundsViscosity = 1000.0;
    this.map.setMaxZoom(3);
    this.map.setMinZoom(1);
    this.map.setView([0, 0], 1);

    this.addMarkers();
    this.addRoads();
    // this.FindWay();

    this.apiMap.setMap(this.map);
  });
}
 getMap()
{
  return this.map;
}
private addMarkers(): void {
  import('leaflet').then((L) => {

    this.cities.forEach((city: any) => {
      const coords = city.coordinates.split(/,\s*/).map(Number);
      const icon = L.icon({
        iconUrl: city.icon,
        iconSize: [35, 45],
        iconAnchor: [17.5, 45],
        popupAnchor: [-3, -46]
      });
      const marker = L.marker(coords, { icon: icon })
        .addTo(this.map)


      marker.on('click', () => {
        this.openSidebar(city);
      });
    });
  });
}
private addRoads(): void {
  import('leaflet').then((L) => {
    for (let el of this.roadsData) {
      let coordinates: number[] = JSON.parse(el.coordinates);
      let road: any = {
        "type": "LineString",
        "coordinates": coordinates
      }
      this.roadsCoordinates.push(road);
      L.geoJSON(road, {
        style: function (feature) {
          return { color: '#808080', weight: 5 };
        }
      }).addTo(this.map);
    }
  });
}

 getCities = () => {
  this.apiMap.getCities().subscribe({
    next: (data) => {
      this.cities = data;
    },
    error: (error) => {
      console.log(error);
    }
  });
}

  getRoads = () => {
    this.apiMap.getRoads().subscribe({
      next: (data) => {

        this.roadsData = data;

      },
      error: (error) => {
        console.log(error);
      }
    });

  }
    DrawRedLine(chosenRoad:any) {
      if (isPlatformBrowser(this.platformId)) {
        import('leaflet').then((L) => {
          var CompletedRoad = chosenRoad.GetRoad();

          for (let el of CompletedRoad) {
            if (isPlatformBrowser(this.platformId)) {
              import('leaflet').then((L) => {

                var geojsonLine = L.geoJSON(el, {
                  style: function (feature) {
                    return {color: '#ff0000', weight: 7};
                  }
                }).addTo(this.map);
              });
            }
          }
        });
      }
    }
  // FindWay = () => {
  // if (isPlatformBrowser(this.platformId)) {
  //   import('leaflet').then((L) => {
  //     let coordinatesArray: number[][] = []; // Перемещение объявления сюда
  //     this.map.eachLayer((layer: L.Layer) => {
  //       if (layer instanceof L.Marker) {
  //         layer.on('click', (e: L.LeafletMouseEvent) => {
  //           const lat: number = e.latlng.lat;
  //           const lng: number = e.latlng.lng;
  //
  //           coordinatesArray.push([lng, lat]);
  //
  //           console.log(JSON.stringify(coordinatesArray));
  //
  //           if (coordinatesArray.length === 2) {
  //
  //             this.ShortWay.start = this.ShortWay.pointCoordinatesSwap(coordinatesArray[0]);
  //             this.ShortWay.end = this.ShortWay.pointCoordinatesSwap(coordinatesArray[1]);
  //
  //             this.chosenRoads.push(this.ShortWay.GetShortestRoad());
  //             console.log(this.chosenRoads[this.chosenRoads.length-1]);
  //             console.log( ShortestWay.ReturnLength(this.chosenRoads[this.chosenRoads.length-1]));
  //             this.DrawRedLine(this.chosenRoads[this.chosenRoads.length-1]);
  //
  //             coordinatesArray.length = 0;
  //           }
  //         });
  //       }
  //     });
  //   });
  // }
  //}

openSidebar(city: any): void {

    if(city==this.selectedCity)
    {
      return;
    }
  this.selectedCity = city;
   this.isSidebarOpen = true;
       this.isCity=true;
       this.isAnim=false
     setTimeout( ()=>{ this.isAnim=true;},100)

}

}
