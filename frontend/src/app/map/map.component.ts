import {Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, inject} from '@angular/core';
import { MapService } from "../services/map.service";
import { isPlatformBrowser } from '@angular/common';
import {latLng} from "leaflet";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css','../../../node_modules/leaflet/dist/leaflet.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  cities: any = [];
  image: string = "assets/Test2.jpg";
  private map: any;
  showLeaflet = false;
  platformId = inject(PLATFORM_ID);

  constructor(private apiMap: MapService,) {
  }

  ngAfterViewInit() {


  }

  ngOnInit() {
    this.getCategory();
    if (isPlatformBrowser(this.platformId)) {
      this.showLeaflet = true;
      this.initMap();
      this.addMarkers();
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

      });

    }
  }

private addMarkers(): void {
  if (isPlatformBrowser(this.platformId)) {
    import('leaflet').then((L) => {
      console.log(this.cities);
      this.cities.forEach((city: any) => {
        const coords = city.coordinates.split(/,\s*/).map(Number);
        const icon = L.icon({iconUrl: city.icon,  iconSize:     [35, 45],
    iconAnchor:   [17.5, 45],
    popupAnchor:  [-3, -46]});
        L.marker(L.latLng(coords[0], coords[1]), {icon: icon})
          .addTo(this.map)
          .bindPopup(city.name);
      });
    });
  }
}

  getCategory = () => {
    this.apiMap.getCategory().subscribe(
      data => {

        this.cities = data;

      },
      error => {
        console.log(error);
      }
    );
  }
}
