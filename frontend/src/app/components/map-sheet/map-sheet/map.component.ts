import {Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, inject} from '@angular/core';
import { MapService } from "../../../services/map.service";
import { isPlatformBrowser } from '@angular/common';


declare const ShortestWay: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css','../../../../../node_modules/leaflet/dist/leaflet.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  cities: any = [];
  roadsData: any=[];
  chosenRoads: any=[];
  roadsCoordinates: any=[];
  image: string = "assets/Test2.jpg";
   map: any;
  showLeaflet = false;
  platformId = inject(PLATFORM_ID);

  ShortWay: any;

  constructor(private apiMap: MapService) {
  }

  ngAfterViewInit() {


  }

  ngOnInit() {
    this.getCities();
    this.getRoads();
    if (isPlatformBrowser(this.platformId)) {
      this.showLeaflet = true;
      this.initMap();
      this.ShortWay= new ShortestWay(this.roadsCoordinates,0,0);

    }
  }

  private initMap(): void {
 if (isPlatformBrowser(this.platformId)) {
    import('leaflet').then((L) => {
        this.map = L.map('map', {
          crs: L.CRS.Simple, zoomControl: false, attributionControl: false, zoomAnimation: true
        },);
        let bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(1061, 1587));
        L.imageOverlay(this.image, bounds).addTo(this.map);
        this.map.fitBounds(bounds);
        this.map.setMaxBounds(bounds);
        this.map.maxBounds = bounds;
        this.map.maxBoundsViscosity = 1000.0;
        this.map.setMaxZoom(3);
        this.map.setMinZoom(1);
        this.map.setView([0, 0], 1);
        //Added elements on map
       this.addMarkers();
       this.addRoads();
       this.FindWay();
       this.apiMap.setMap(this.map);
 });
  }
  }
 getMap()
{
  return this.map;
}
private addMarkers(): void {
  if (isPlatformBrowser(this.platformId)) {
    import('leaflet').then((L) => {
      this.cities.forEach((city: any) => {
        const coords = city.coordinates.split(/,\s*/).map(Number);
        const icon = L.icon({iconUrl: city.icon,  iconSize:     [35, 45],
    iconAnchor:   [17.5, 45],
    popupAnchor:  [-3, -46]});
        L.marker( coords, {icon: icon})
          .addTo(this.map)
          .bindPopup(city.name);
      });
    });
  }
}
private addRoads(): void
{
  if(isPlatformBrowser(this.platformId)){
    import('leaflet').then((L)=>{
      for(let el of this.roadsData)
      {
        let coordinates: number= JSON.parse(el.coordinates);
        let road: any={
          "type":"LineString",
          "coordinates": coordinates
        }
        this.roadsCoordinates.push(road);
        L.geoJSON(road, {style: function (feature) {return {color: '#808080',weight: 5};
                    }
                }).addTo(this.map);
      }

    });
  }
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
  FindWay = () => {
  if (isPlatformBrowser(this.platformId)) {
    import('leaflet').then((L) => {
      let coordinatesArray: number[][] = []; // Перемещение объявления сюда
      this.map.eachLayer((layer: L.Layer) => {
        if (layer instanceof L.Marker) {
          layer.on('click', (e: L.LeafletMouseEvent) => {
            const lat: number = e.latlng.lat;
            const lng: number = e.latlng.lng;

            coordinatesArray.push([lng, lat]);

            console.log(JSON.stringify(coordinatesArray));

            if (coordinatesArray.length === 2) {
              this.ShortWay.start = this.ShortWay.pointCoordinatesSwap(coordinatesArray[0]);
              this.ShortWay.end = this.ShortWay.pointCoordinatesSwap(coordinatesArray[1]);

              this.chosenRoads.push(this.ShortWay.GetShortestRoad());
              console.log(this.chosenRoads[this.chosenRoads.length-1]);
              console.log( ShortestWay.ReturnLength(this.chosenRoads[this.chosenRoads.length-1]));
              this.DrawRedLine(this.chosenRoads[this.chosenRoads.length-1]);

              coordinatesArray.length = 0;
            }
          });
        }
      });
    });
  }
}



}
