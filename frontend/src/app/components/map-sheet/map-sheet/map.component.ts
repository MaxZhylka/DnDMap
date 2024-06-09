import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  inject
} from '@angular/core';
import { MapService } from "../../../services/map.service";
import { isPlatformBrowser } from '@angular/common';
import { forkJoin } from "rxjs";
import { fadeInOut, fadeInOutImg, slideInOutAnimation } from "../../../animations/slideInOut";
import { CharacterService } from "../../../services/character.service";
declare const ShortestWay: any;
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../../../node_modules/leaflet/dist/leaflet.css'],
  animations: [slideInOutAnimation, fadeInOut, fadeInOutImg]
})
export class MapComponent implements OnInit {
  cities: any = [];
  roadsData: any = [];
  transports = [
    { src: 'assets/img/walk.png', alt: 'walk' },
    { src: 'assets/img/horse.png', alt: 'horse' },
    { src: 'assets/img/caretta.png', alt: 'carriage' },
    { src: 'assets/img/vagon.png', alt: 'wagon' },
    { src: 'assets/img/broom.png', alt: 'spoon' },
    { src: 'assets/img/boat.png', alt: 'boat' },
  ];

  tripTime: string = '';
  selectedTransport: number = 0;
  highlightPosition: number = 0;
  chosenRoads: any = [];
  roadsCoordinates: any = [];
  image: string = "assets/Test2.jpg";
  map: any;
  defaultImg = "assets/img/defaultCharacter.png";
  isSidebarOpen: boolean = false;
  selectedCharacter: any;
  characters: any;
  previewRoad: any[] = [];
  defaultCharacter: string = 'assets/img/img.png';
  showLeaflet = false;
  platformId = inject(PLATFORM_ID);
  selectedCity: any;
  distance: number = 0;
  calculatedDistance: string = '';
  ShortWay: any;
  arr:any=[];
  isCity: boolean = true;
  isAnim: boolean = true;
  displaySelection: boolean = false;
  seaRoads: any[]=[];
  seaRoadsCoordinates: any=[];

  constructor(private apiMap: MapService, private characterService: CharacterService) {
    this.ShortWay = new ShortestWay(this.roadsCoordinates, 0, 0);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      forkJoin({
        seaRoads: this.apiMap.getSeaRoads(),
        roads: this.apiMap.getRoads(),
        cities: this.apiMap.getCities(),
        characters: this.characterService.getMyCharacters()
      }).subscribe({
        next: ({seaRoads, roads, cities, characters }) => {
          this.roadsData = roads;
          this.cities = cities;
          this.characters = characters;
          this.seaRoads = seaRoads;
          console.log(this.characters);
          this.initMap();
        },
        error: (error) => console.error('Ошибка при загрузке данных:', error)
      });
    }
  }

  private initMap(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then((L) => {
        this.map = L.map('map', {
          crs: L.CRS.Simple,
          zoomControl: false,
          attributionControl: false,
          zoomAnimation: true
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

        const icon = L.icon({
          iconUrl: this.cities[0].icon,
          iconSize: [35, 45],
          iconAnchor: [17.5, 45],
          popupAnchor: [-3, -46]
        });


        this.addMarkers();
        this.addRoads();
        this.addSeaRoads();
          this.map.on('contextmenu', (e: L.LeafletMouseEvent) => {
        let latlng = e.latlng;
        let coords:[number,number] = [latlng.lng ,  latlng.lat ];
        this.arr.push(coords);
        const marker=L.marker([e.latlng.lat, e.latlng.lng],{icon: icon}).addTo(this.map);
this.map.on('mousedown', (e : L.LeafletMouseEvent)=> {
  if (e.originalEvent.button === 1) {
    this.arr=[];
  }
});
      marker.on('click', (e: L.LeafletMouseEvent) => {
        let latlng = e.latlng;
        this.arr.push([latlng.lng, latlng.lat]);
        console.log(JSON.stringify(this.arr));
      });

        console.log(JSON.stringify(this.arr));
      });







        this.apiMap.setMap(this.map);
      });
    }
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


      marker.on('click', (e: L.LeafletMouseEvent) => {
        let latlng = e.latlng;
        this.arr.push([latlng.lng, latlng.lat]);
        console.log(JSON.stringify(this.arr));
      });




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
            return {color: '#808080', weight: 5};
          }
        }).addTo(this.map);
      }});

  };
  private addSeaRoads(): void {
  import('leaflet').then((L) => {
    for (let el of this.seaRoads) {
      let coordinates: number[][] = JSON.parse(el.coordinates);
      let road: any = {
        "type": "LineString",
        "coordinates": coordinates
      }

      const icon = L.icon({
        iconUrl: 'assets/img/seapoint.png',
        iconSize: [35, 45],
        iconAnchor: [17.5, 45],
        popupAnchor: [-3, -46]
      });

      let coordinates1:[number,number]=[coordinates[0][1],coordinates[0][0]];
        let coordinates2:[number,number]=[coordinates[coordinates.length - 1][1],coordinates[coordinates.length - 1][0]];

      const markerStart = L.marker(coordinates1, { icon: icon }).addTo(this.map);

      const markerEnd = L.marker(coordinates2, { icon: icon }).addTo(this.map);
markerStart.on('click', (e: L.LeafletMouseEvent) => {
        let latlng = e.latlng;
        this.arr.push([latlng.lng, latlng.lat]);
        console.log(JSON.stringify(this.arr));
      });
markerEnd.on('click', (e: L.LeafletMouseEvent) => {
        let latlng = e.latlng;
        this.arr.push([latlng.lng, latlng.lat]);
        console.log(JSON.stringify(this.arr));
      });
      this.seaRoadsCoordinates.push(road);
      L.geoJSON(road, {
        style: function (feature) {
            return {color: '#00bbff', weight: 5};
        }
      }).addTo(this.map);

    }
  });

  };


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

  DrawRedLine(chosenRoad: any, startPoint: string, endPoint: string) {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then((L) => {
        var completedRoad = chosenRoad.GetRoad();

        var geojsonLine = L.geoJSON(completedRoad, {
          style: function (feature) {
            return { color: '#ff0000', weight: 7 };
          }
        }).addTo(this.map);

        // Отключение взаимодействия с картой во время анимации
        this.map.dragging.disable();
        this.map.scrollWheelZoom.disable();
        this.map.doubleClickZoom.disable();
        this.map.touchZoom.disable();
        this.map.boxZoom.disable();
        this.map.keyboard.disable();

        this.map.flyToBounds(geojsonLine.getBounds(), {
          maxZoom: 15,
          duration: 1
        });

        this.map.once('moveend', () => {

          this.map.dragging.enable();
          this.map.scrollWheelZoom.enable();
          this.map.doubleClickZoom.enable();
          this.map.touchZoom.enable();
          this.map.boxZoom.enable();
          this.map.keyboard.enable();

          this.map.invalidateSize();
        });

        this.previewRoad.push({
          layer: geojsonLine,
          start: startPoint,
          end: endPoint
        });
      });
    }
  }

  openSidebar(city: any): void {
    if (city == this.selectedCity) {
      return;
    }
    this.selectedCity = city;
    this.isSidebarOpen = true;
    this.isCity = true;
    this.isAnim = false;
    setTimeout(() => { this.isAnim = true; }, 100);
  }

  openCharacterSelection() {
    this.displaySelection = true;
  }

  setSelection(character: any) {
    this.selectedCharacter = character;
    this.calculateDistance();
    this.displaySelection = false;
  }

  calculateDistance() {
    if (!this.selectedCity || !this.selectedCharacter) {
      this.calculatedDistance = '';
      return;
    }

    const firstCity = this.cities.find((item: { name: string; }) =>
      item.name.toLowerCase() === this.selectedCharacter.location.toLowerCase()
    );

    if (firstCity.coordinates === this.selectedCity.coordinates) {
      this.distance = 0;
      this.calculatedDistance = 'Персонаж уже в этом городе!';
      this.calculateTime();
      return;
    }

    if (firstCity) {
      this.ShortWay.start = firstCity.coordinates.split(/,\s*/).map(Number);
      this.ShortWay.end = this.selectedCity.coordinates.split(/,\s*/).map(Number);

      const chosenWay = this.ShortWay.GetShortestRoad();

      if (chosenWay === null) {
        this.distance = 0;
        this.calculatedDistance = 'Нету дороги в этот город!';
        this.calculateTime();
        return;
      }

      const length = Math.floor(ShortestWay.ReturnLength(chosenWay));

      this.previewRoad.forEach(item => item.layer.remove());

      this.DrawRedLine(chosenWay, firstCity.name, this.selectedCity.name);

      this.distance = length;
      this.calculateTime();
      this.calculatedDistance = `${length} миль`;
    } else {
      this.calculatedDistance = 'Ошибка с поиском города, обратитесь к Эдику!';
    }
  }

  OpenSecondState() {
    this.isCity = false;
    this.calculateDistance();
  }

  close() {
    this.isSidebarOpen = false;
    this.selectedCity = null;
  }

  selectTransport(index: number): void {
    this.selectedTransport = index;
    this.highlightPosition = index * (2.66 + 0.2);
    this.calculateTime();
  }

  calculateTime() {
    if (this.distance != 0) {
      console.log(this.selectedTransport)
      if (this.selectedTransport == 0) {
        this.tripTime = '±' + Math.floor(this.distance / 18) + " дней";
      }
      else if (this.selectedTransport == 1 || this.selectedTransport == 5) {
        this.tripTime = '±' + Math.floor(this.distance / 30) + " дней";
      }
      else if (this.selectedTransport == 2 || this.selectedTransport == 3 || this.selectedTransport == 4) {
        this.tripTime = '±' + Math.floor(this.distance / 24) + " дней";
      }
    }
    else {
      this.tripTime = '';
    }
  }
}
