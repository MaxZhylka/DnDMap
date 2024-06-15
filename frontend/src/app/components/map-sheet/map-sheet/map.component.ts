import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  inject, OnDestroy, ViewContainerRef, ViewChild, ElementRef
} from '@angular/core';
import { MapService } from "../../../services/map.service";
import { isPlatformBrowser } from '@angular/common';
import {forkJoin, interval, last, Subscription, switchMap, tap} from "rxjs";
import { fadeInOut, fadeInOutImg, slideInOutAnimation } from "../../../animations/slideInOut";
import { CharacterService } from "../../../services/character.service";
declare const ShortestWay: any;
declare const RGBDistance: any;
import * as L from 'leaflet';
import {FormControl, FormGroup} from "@angular/forms";


interface OrderSegmentsResult {
  orderedSegments: any[];
  lastMatch?: boolean;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../../../node_modules/leaflet/dist/leaflet.css'],
  animations: [slideInOutAnimation, fadeInOut, fadeInOutImg]
})
export class MapComponent implements OnInit, OnDestroy {
  cities: any = [];
  roadsData: any = [];
  ignoreElements:any=[];
  transports = [
    {src: 'assets/img/walk.png', alt: 'walk'},
    {src: 'assets/img/horse.png', alt: 'horse'},
    {src: 'assets/img/caretta.png', alt: 'carriage'},
    {src: 'assets/img/vagon.png', alt: 'wagon'},
    {src: 'assets/img/broom.png', alt: 'spoon'},
    {src: 'assets/img/boat.png', alt: 'boat'},
  ];
  ships = [
    { name: 'ВОЕННЫЙ КОРАБЛЬ', speed: 4 },
    { name: 'ГАЛЕРА', speed: 4 },
    { name: 'КИЛЕВАЯ ЛОДКА', speed: 3 },
    { name: 'ЛАДЬЯ', speed: 5 },
    { name: 'ПАРУСНЫЙ КОРАБЛЬ', speed: 5 },
    { name: 'ШЛЮПКА', speed: 3 }
  ];
  displayPopup:boolean=false;
  popupCoordinates:any;
  popupCharacter:any;
  enoughMoney:boolean=true;
  hasHorse:boolean=false;
  checkBoxActive:boolean=false;
  arrivedCharacters: any[] = [];
  tripTime: string = '';
  selectedTransport: number = 0;
  highlightPosition: number = 0;
  displayWayEnd: boolean = false;
  chosenRoads: any = [];
  roadsCoordinates: any = [];
  image: string = "assets/Test2.jpg";
  map: any;
  defaultImg = "assets/img/defaultCharacter.png";
  isSidebarOpen: boolean = false;
  selectedCharacter: any;
  characters: any;
  previewRoad: any[] = [];
  previewRoadCoordinates: any[] = [];
  defaultCharacter: string = 'assets/img/img.png';
  showLeaflet = false;
  platformId = inject(PLATFORM_ID);
  selectedCity: any;
  distance: number = 0;
  calculatedDistance: string = '';
  ShortWay: any;
  ShortSee: any;
  arr: any = [];
  isCity: boolean = true;
  isAnim: boolean = true;
  displaySelection: boolean = false;
  seaRoads: any[] = [];
  seaRoadsCoordinates: any = [];
  intervalSubscription = new Subscription();
  isRoadExist = false;
  roadsLayers:any[]=[];
  seaRoadsLayers:any[]=[];
   private walkActive: boolean = true;
  private boatActive: boolean = false;
  price:string='';
  priceValue:number=0;
  MagicSpeed!:FormGroup;
  @ViewChild('popup', { static: false }) popupRef!:ElementRef;

  constructor(private apiMap: MapService,
              private characterService: CharacterService) {
    this.ShortWay = new ShortestWay(this.roadsCoordinates, 0, 0);
    this.ShortSee = new ShortestWay(this.seaRoadsCoordinates, 0, 0);
      this.MagicSpeed = new FormGroup({
    magicSpeedControl: new FormControl(),
          selectedShip: new FormControl('ВОЕННЫЙ КОРАБЛЬ')
  });
  }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadData();

      this.intervalSubscription = interval(1000).subscribe({
        next: () => {
          this.updateCharacters(this.characters)
        }
      })


    }

    this.MagicSpeed.get('magicSpeedControl')?.valueChanges.pipe(
  tap(level => {
   if (((/^\d+$/.test(level)) || level == "")) {
      const numLevel = parseInt(level);
      if (numLevel < 1 || numLevel > 100) {

        const correctedLevel = Math.min(Math.max(numLevel, 1), 100);
        this.MagicSpeed.get('magicSpeedControl')?.setValue(correctedLevel, { emitEvent: false });
      }
    } else {

      this.MagicSpeed.get('magicSpeedControl')?.setValue(1, { emitEvent: false });
    }
   this.calculateTime();
  })
).subscribe();
    this.MagicSpeed.get('selectedShip')?.valueChanges.subscribe({next:()=>{this.calculateTime()}});
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
  setDefault()
  {
    if(this.MagicSpeed.get("magicSpeedControl")?.value=="")
  {
     this.MagicSpeed.get("magicSpeedControl")?.setValue(1, { emitEvent: false });
      this.calculateTime();
  }
  }

  loadData() {
    forkJoin({
      seaRoads: this.apiMap.getSeaRoads(),
      roads: this.apiMap.getRoads(),
      cities: this.apiMap.getCities(),
      characters: this.characterService.getMyCharacters()
    }).subscribe({
      next: ({seaRoads, roads, cities, characters}) => {
        this.roadsData = roads;
        this.cities = cities;
        this.seaRoads = seaRoads;
        this.initMap();
        this.updateCharacters(characters);
      },
      error: (error) => console.error('Ошибка при загрузке данных:', error)
    });
  }

  interpolatePosition(start: [number, number], end: [number, number], progress: number): [number, number] {
    // console.log(start);
    // console.log(end);
    // console.log(progress);
    const lat = start[0] + (end[0] - start[0]) * progress;
    const lng = start[1] + (end[1] - start[1]) * progress;
    return [lng, lat];
  }
preventDoubleClick(event: MouseEvent) {
    event.stopPropagation();
  }
  roundToFour(num: number): number {
    return Math.round(num * 10000) / 10000;
  }
  coordinatesMatch(coord1: [number, number], coord2: [number, number]): boolean {
    return this.roundToFour(coord1[0]) === this.roundToFour(coord2[0]) && this.roundToFour(coord1[1]) === this.roundToFour(coord2[1]);
  }
  orderSegments(wayPoints: any[], startPoint: [number, number], endPoint: [number, number]):OrderSegmentsResult {
    const orderedSegments = [];
    let currentPoint: [number, number] = startPoint;
    let flag = false;
    let segmentIndex = -1;
    let lastMatch=false;



    while (wayPoints.length > 0) {

      if (!flag) {
        segmentIndex = wayPoints.findIndex(segment =>
          this.coordinatesMatch(segment.coordinates[0], currentPoint) ||
          this.coordinatesMatch(segment.coordinates[segment.coordinates.length - 1], currentPoint)
        );
      }

      if (segmentIndex === -1) {
        console.log("Сегмент для текущей точки не найден. Проверяем конечную точку...");
        currentPoint = endPoint;
        segmentIndex = wayPoints.findIndex(segment => {
          const firstCoordMatch = this.coordinatesMatch(segment.coordinates[0], currentPoint);
          const lastCoordMatch = this.coordinatesMatch(segment.coordinates[segment.coordinates.length - 1], currentPoint);

          console.log("Проверка сегмента для конечной точки:");
          console.log(endPoint);
          console.log( segment);
          console.log("Совпадение первой координаты:", firstCoordMatch);
          console.log("Совпадение последней координаты:", lastCoordMatch);
           lastMatch=lastCoordMatch;
          return firstCoordMatch || lastCoordMatch;

        });
      }

      if (segmentIndex === -1) {
       // console.log("Сегмент для конечной точки также не найден. Выход из цикла.");
        break;
      }

      console.log(segmentIndex);
      console.log(wayPoints[segmentIndex]);
      const segment = wayPoints[segmentIndex];

      if (this.coordinatesMatch(segment.coordinates[0], currentPoint)) {
        orderedSegments.push(segment);
        currentPoint = segment.coordinates[segment.coordinates.length - 1];
        wayPoints.splice(segmentIndex,1);
      } else {
        segment.coordinates.reverse();
        orderedSegments.push(segment);
        currentPoint = segment.coordinates[segment.coordinates.length - 1];
           wayPoints.splice(segmentIndex,1);
      }


    }


      if (lastMatch) {
      return { orderedSegments, lastMatch };
    } else {
      return {orderedSegments};
    }
  }


  updateCharacterPosition(character: any) {
    import('leaflet').then((L) => {
      const now = new Date();
      const startDate = new Date(character.dateOfStart);
      const endDate = new Date(character.dateOfEnd);
      const totalDuration = endDate.getTime() - startDate.getTime();
      const elapsedDuration = now.getTime() - startDate.getTime();
      const progress = Math.min(elapsedDuration / totalDuration, 1);  // Ограничиваем максимальное значение 1
      const allLength = this.calculateRoadLength(character.WayCoordinates);
      const segmentsLength: any[] = [];

       const location = character.location;
  const containsNumbers = /\d/.test(location);

   let Swapped:[number,number];
      if(!containsNumbers) {
        const firstCity = this.cities.find((item: { name: string; }) =>
          item.name.toLowerCase() === character.location.toLowerCase()
        );

           let StartPoint: number[] = firstCity.coordinates.split(/,\s*/).map(Number);
            Swapped = [StartPoint[1], StartPoint[0]];
      }
      else
      {
             let coordinates= location.split(/,\s*/).map(Number);
            Swapped = [coordinates[1],coordinates[0]];

      }
 const lastCity = this.cities.find((item: { name: string; }) =>
          item.name.toLowerCase() === character.newCityLocation.toLowerCase());

      let lastCityCoordinates=lastCity.coordinates.split(/,\s*/).map(Number);

      let wayPoints = this.orderSegments(JSON.parse(JSON.stringify(character.WayCoordinates)), Swapped,[lastCityCoordinates[1],lastCityCoordinates[0]]);


      for (let segment of wayPoints.orderedSegments) {

        if (segmentsLength.length > 0) {
          segmentsLength.push(this.calculateSegmentLength(segment.coordinates) + segmentsLength[segmentsLength.length - 1]);
        } else {
          segmentsLength.push(this.calculateSegmentLength(segment.coordinates));
        }

      }


      let currentSegment: number = 0;
      for (let i = 0; i < segmentsLength.length; i++) {
        if (allLength * progress < segmentsLength[i]) {
          currentSegment = i;
          break;
        }
      }
      let coordinates: [number, number][] = [];
      let segmentsParts: any[] = [];
      for (let i = 0; i < wayPoints.orderedSegments[currentSegment].coordinates.length - 1; i++) {

        let currentPart: number = 0;
        coordinates = [wayPoints.orderedSegments[currentSegment].coordinates[i], wayPoints.orderedSegments[currentSegment].coordinates[i + 1]];
        if (segmentsParts.length > 0) {


          let roadLength = segmentsParts[segmentsParts.length - 1].roadLength + this.calculateSegmentLength(coordinates);


          segmentsParts.push({

            roadLength: roadLength,
            start: wayPoints.orderedSegments[currentSegment].coordinates[i],
            end: wayPoints.orderedSegments[currentSegment].coordinates[i + 1]
          });
        } else {
          let roadLength;
          if (currentSegment == 0) {
            roadLength = this.calculateSegmentLength(coordinates);
          } else {
            roadLength = segmentsLength[currentSegment - 1] + this.calculateSegmentLength(coordinates);
          }
          segmentsParts.push({

            roadLength: roadLength,
            start: wayPoints.orderedSegments[currentSegment].coordinates[i],
            end: wayPoints.orderedSegments[currentSegment].coordinates[i + 1]
          });
        }

      }
      let currentPart: number = 0;
      for (let i = 0; i < segmentsParts.length; i++) {
        if (allLength * progress < segmentsParts[i].roadLength) {
          currentPart = i;
          break;
        }
      }


      let progressOnPart = 0;

      if (currentPart == 0 && currentSegment == 0) {
        progressOnPart = (allLength * progress) / (segmentsParts[currentPart].roadLength);
      } else if (currentPart == 0) {
        progressOnPart = ((allLength * progress) - segmentsLength[currentSegment - 1]) / (segmentsParts[currentPart].roadLength - segmentsLength[currentSegment - 1]);

      } else {
        progressOnPart = (allLength * progress - segmentsParts[currentPart - 1].roadLength) / (segmentsParts[currentPart].roadLength - segmentsParts[currentPart - 1].roadLength);
      }

      character.partCoordinates=segmentsParts[currentPart].start;

      let coordinatesMarker: [number, number] = this.interpolatePosition(segmentsParts[currentPart].start, segmentsParts[currentPart].end, progressOnPart);

      segmentsParts = [];

      if (!character.road||character.updateRoad) {
        character.road = L.geoJSON(wayPoints.orderedSegments, {
            style: function (feature) {
              return {color: '#37ff00', weight: 7};
            }
          }
        ).addTo(this.map);
      }
      if (!character.marker) {
        const icon = L.icon({
          iconUrl: 'assets/img/seapoint.png',
          iconSize: [35, 45],
          iconAnchor: [17.5, 45],
          popupAnchor: [-3, -46]
        });

        character.marker = L.marker(coordinatesMarker, {icon: icon}).on('click',()=>{ this.displayCharacterInWay(character);});
        character.marker.addTo(this.map);
        character.marker._icon.id='marker'+character.id;

        let marker= document.getElementById('marker'+character.id);
         this.ignoreElements.push(new ElementRef(marker));

    this.popupCharacter=character;
      } else {
        character.marker.setLatLng(coordinatesMarker);
      }

    });
  }

displayCharacterInWay(character: any) {

   this.displayPopup=true;
   const markerLatLng= character.marker.getLatLng();
   const markerPoint= this.map.latLngToContainerPoint(markerLatLng);
    this.popupCoordinates = { x: markerPoint.x, y: markerPoint.y };
}
closePopup()
{
  this.displayPopup=false;
}

  calculateRoadLength(road: any[]): number {
    let totalLength = 0;


    for (const segment of road) {
      const coordinates = segment.coordinates;

      for (let i = 0; i < coordinates.length - 1; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        const segmentLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        totalLength += segmentLength;
      }
    }

    return totalLength;
  }

  calculateSegmentLength(segment: any[]) {
    let length = 0;
    for (let i = 0; i < segment.length - 1; i++) {
      const [x1, y1] = segment[i];
      const [x2, y2] = segment[i + 1];
      const segmentLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      length += segmentLength;
    }
    return length;
  }

  updateCharacters(characters: any[]) {

    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then((L) => {
        this.characters = characters.map((character: {
          id: number,
          inWay: boolean;
          dateOfEnd: string | number | Date;
          location: any;
          newCityLocation: any;
          WayCoordinates: string;
          dateOfStart: string;
          marker:any;
          road:any;

        }) => {
          if (character.inWay) {
            const now = new Date();
            const endDate = new Date(character.dateOfEnd);

            if (endDate <= now) {


              character.location = character.newCityLocation;
              character.inWay = false;
              this.displayPopup=false;
              this.ignoreElements=[];
              character.WayCoordinates = '';
              character.dateOfStart = '';
              character.dateOfEnd = '';
              character.newCityLocation = '';
              if(character.marker)
              {
                     character.marker.remove();
              }

              character.marker='';
              if(character.road)
              {
                 character.road.remove();
              }
              character.road='';
              this.arrivedCharacters.push(character);

              let dataToUpdate: any = {
                location: character.location,
                inWay: character.inWay,
                WayCoordinates: character.WayCoordinates,
                dateOfStart: null,
                dateOfEnd: null,
                newCityLocation: '',
                selectedTransport:'',
                ifFlying:false
              };

              this.apiMap.setInWay(dataToUpdate, character.id).subscribe();
            } else {
              this.updateCharacterPosition(character);
            }
          }
          return character;
        });
        if (this.arrivedCharacters.length > 0) {
          this.displayWayEnd = true;
        }
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
          let coords: [number, number] = [latlng.lng, latlng.lat];
          this.arr.push(coords);
          const marker = L.marker([e.latlng.lat, e.latlng.lng], {icon: icon}).addTo(this.map);
          this.map.on('mousedown', (e: L.LeafletMouseEvent) => {
            if (e.originalEvent.button === 1) {
              this.arr = [];
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
        const marker = L.marker(coords, {icon: icon})
          .addTo(this.map)


        marker.on('click', (e: L.LeafletMouseEvent) => {
          let latlng = e.latlng;
          this.arr.push([latlng.lng, latlng.lat]);
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
       this.roadsLayers.push( L.geoJSON(road, {
          style: function (feature) {
            return {color: '#808080', weight: 5};
          }
        }).addTo(this.map));
      }
    });

  };

  private addSeaRoads(): void {
    import('leaflet').then((L) => {
      for (let el of this.seaRoads) {
        let coordinates: number[][] = JSON.parse(el.coordinates);
        let road: any = {
          "type": "LineString",
          "coordinates": coordinates
        }

        this.seaRoadsCoordinates.push(road);
        this.seaRoadsLayers.push(L.geoJSON(road, {
          style: function (feature) {
            return {color: '#00bbff', weight: 5};
          }
        })/*.addTo(this.map)*/); //Вернуть что бы морские пути отображались при загрузке страницы
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
        var completedRoad = chosenRoad;

        var geojsonLine = L.geoJSON(completedRoad, {
          style: function (feature) {
            return {color: '#ff0000', weight: 7};
          }
        }).addTo(this.map);

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

        this.previewRoadCoordinates.push(chosenRoad);
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
    setTimeout(() => {
      this.isAnim = true;
    }, 100);
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
       this.previewRoad.forEach(item => item.layer.remove());
      this.isRoadExist = false;
      this.calculateTime();
      return;
    }

    if (firstCity) {

      // console.log(this.ShortSee);
      // console.log(this.ShortWay);

      if(this.selectedTransport==4&&this.checkBoxActive)
      {

          let Start=firstCity.coordinates.split(/,\s*/).map(Number);
          let End= this.selectedCity.coordinates.split(/,\s*/).map(Number);
          let length=Math.floor(Math.sqrt((Start[0]-End[0])*(Start[0]-End[0])+ (Start[1]-End[1])*(Start[1]-End[1]) )*2.39401496);
            this.previewRoad.forEach(item => item.layer.remove());
          this.DrawRedLine([{type:'LineString',coordinates:[[Start[1],Start[0]],[End[1],End[0]]]}],firstCity.name,this.selectedCity.name);
          console.log([Start,End]);
          this.distance=length;
          this.isRoadExist=true;
          this.calculatedDistance = `${length} миль`;
          this.calculateTime();
          return;

      }
      else if (this.selectedTransport == 5) {
        this.ShortSee.start = firstCity.coordinates.split(/,\s*/).map(Number);
        this.ShortSee.end = this.selectedCity.coordinates.split(/,\s*/).map(Number);

        const chosenSee = this.ShortSee.GetShortestRoad();
        if (chosenSee === null) {
          this.distance = 0;
          this.calculatedDistance = 'Между этими городами нет морского пути!';
           this.previewRoad.forEach(item => item.layer.remove());
          this.isRoadExist = false;
          this.calculateTime();
          return;

        }

        const length = Math.floor(ShortestWay.ReturnLength(chosenSee));
        this.previewRoad.forEach(item => item.layer.remove());
        this.DrawRedLine(chosenSee.GetRoad(), firstCity.name, this.selectedCity.name);
        console.log(chosenSee.GetRoad())
        this.distance = length;
        this.calculateTime();
        this.calculatedDistance = `${length} миль`;
        this.isRoadExist = true;
        return;

      }

      this.ShortWay.start = firstCity.coordinates.split(/,\s*/).map(Number);
      this.ShortWay.end = this.selectedCity.coordinates.split(/,\s*/).map(Number);

      const chosenWay = this.ShortWay.GetShortestRoad();

      if (chosenWay === null) {
        this.distance = 0;
        this.calculatedDistance = 'Между этими городами нет дороги!';
         this.previewRoad.forEach(item => item.layer.remove());
        this.isRoadExist = false;
        this.calculateTime();
        return;
      }

      const length = Math.floor(ShortestWay.ReturnLength(chosenWay));

      this.previewRoad.forEach(item => item.layer.remove());

      this.DrawRedLine(chosenWay.GetRoad(), firstCity.name, this.selectedCity.name);

      this.distance = length;
      this.calculateTime();
      this.calculatedDistance = `${length} миль`;
      this.isRoadExist = true;
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
    this.calculateDistance();
    this.calculateTime();
  }

  calculateTime() {
    if (this.distance != 0) {

      if (this.selectedTransport == 0) {
        let timeCost = Math.floor(this.distance / 18)
        this.tripTime = '±' + timeCost + " дней";
        this.priceValue=Math.floor(timeCost * 0.5);
        this.price =this.priceValue+ ' ЗМ';
        this.enoughMoney =this.priceValue <= this.checkMoney();

      } else if (this.selectedTransport == 5) {
        let ship = this.ships.find(ship => ship.name == this.MagicSpeed.get('selectedShip')?.value);
        if (ship) {
          this.tripTime = '±' + Math.floor(this.distance / (ship.speed * 24)) + " дней";
        this.priceValue= Math.floor((ship.speed / 2 * this.distance) / 100);
          this.price =this.priceValue+ ' ЗМ';
          this.enoughMoney =this.priceValue <= this.checkMoney();
        }

      } else if (this.selectedTransport == 1) {
        let timeCost = Math.floor(this.distance / 30);
        this.tripTime = '±' + timeCost + " дней";
       this.priceValue=this.hasHorse ? Math.floor(timeCost * 0.5) :Math.floor(timeCost * 0.5 + 20);
        this.price =this.priceValue+ ' ЗМ';
        this.enoughMoney =this.priceValue <= this.checkMoney();

      } else if (this.selectedTransport == 2 || this.selectedTransport == 3) {
        let timeCost = Math.floor(this.distance / 24);
        this.tripTime = '±' + timeCost + " дней";
        if (this.selectedTransport == 2) {
         this.priceValue= Math.floor((0.5 * this.distance + 50 * timeCost) / 100);
          this.price =this.priceValue+ ' ЗМ';
          this.enoughMoney =this.priceValue <= this.checkMoney();
        }
        if (this.selectedTransport == 3) {
          this.priceValue= Math.floor((0.03 * this.distance + 50 * timeCost) / 100);
          this.price =this.priceValue+ ' ЗМ';
          this.enoughMoney =this.priceValue <= this.checkMoney();
        }

      } else if (this.selectedTransport == 4) {

       const speed = this.MagicSpeed.get('magicSpeedControl')?.value;
          if (speed > 0) {
            this.tripTime = Math.floor(this.distance / (8 * speed)) + ' дней';
            this.enoughMoney=true;
          } else {
            this.tripTime = '';
             this.enoughMoney=true;
          }
          this.price = '';

      }
    } else {
      this.tripTime = '';
      this.price='';
    }
  }

  goTo() {
    const now = new Date();
    let dateOfStart = new Date().toISOString();
    let dateOfEnd = new Date(now.getTime() + 35000).toISOString();
       this.selectedCharacter.dateOfStart = dateOfStart;
    this.selectedCharacter.dateOfEnd = dateOfEnd;

    this.selectedCharacter.inWay = true;
    this.selectedCharacter.WayCoordinates = this.previewRoadCoordinates[this.previewRoadCoordinates.length - 1];
    this.selectedCharacter.newCityLocation = this.selectedCity.name;

    const characterIndex = this.characters.findIndex((char: { id: number }) => char.id === this.selectedCharacter.id);

    if (characterIndex !== -1) {
      this.characters[characterIndex].inWay = true;
      this.characters[characterIndex].dateOfStart = dateOfStart;
      this.characters[characterIndex].dateOfEnd = dateOfEnd;
      this.characters[characterIndex].WayCoordinates = this.previewRoadCoordinates[this.previewRoadCoordinates.length - 1];
      this.characters[characterIndex].newCityLocation = this.selectedCity.name;
    }

        let currentMoney=this.checkMoney();
    let residualMoney=currentMoney-this.priceValue;
    let platinum=Math.floor(residualMoney/10);
    let electrum=Math.floor((residualMoney-platinum*10)/5);
    let gold=Math.floor(residualMoney-platinum*10-electrum*5);
    let silver = Math.floor((residualMoney - platinum * 10 - electrum * 5 - gold) * 10);
    let copper = Math.floor((residualMoney - platinum * 10 - electrum * 5 - gold - silver / 10) * 100);
    this.selectedCharacter.platinum=platinum;
    this.selectedCharacter.electrum=electrum;
    this.selectedCharacter.golden=gold;
    this.selectedCharacter.silver=silver;
    this.selectedCharacter.copper=copper;
    this.selectedCharacter.selectedTransport=this.selectedTransport;
  let coins:any={
        platinum:platinum,
      electrum:electrum,
      golden:gold,
      silver:silver,
      copper:copper
  }
  this.apiMap.updateCoins(coins,this.selectedCharacter.id).subscribe({
    next:(data)=>{

    },
    error:(data)=>
    {
      console.log(data);
    }
  })

    console.log(this.checkBoxActive);
    let data: any = {
      inWay: true,
      dateOfStart: dateOfStart,
      dateOfEnd: dateOfEnd,
      WayCoordinates: this.previewRoadCoordinates[this.previewRoadCoordinates.length - 1],
      newCityLocation: this.selectedCity.name,
      selectedTransport: this.selectedTransport,
      ifFlying:this.checkBoxActive
    };
    this.selectedCharacter.ifFlying=this.checkBoxActive;
    this.apiMap.setInWay(data, this.selectedCharacter.id).subscribe({
      next: (data) => {

        this.selectedCharacter = '';
        this.close();
        this.previewRoad.forEach(item => item.layer.remove());
        this.previewRoadCoordinates = []
      },
      error: (data) => {
        console.log(data)
      }
    });
  }

  switchMagicItem()
  {
    this.checkBoxActive=!this.checkBoxActive;
    this.calculateDistance();
    this.calculateTime();
  }

  switchWalk() {
    this.walkActive = !this.walkActive;
    if(this.walkActive)
    {
          this.roadsLayers.forEach(layer=>layer.addTo(this.map));
    }
    else
    {

      this.roadsLayers.forEach(layer=>layer.remove());
    }
    this.updateButtonStyles();
  }

  switchBoat() {
    this.boatActive = !this.boatActive;
    if(this.boatActive)
    {
      this.seaRoadsLayers.forEach(layer=>layer.addTo(this.map));
    }
    else
    {
      this.seaRoadsLayers.forEach(layer=>layer.remove());
    }
    this.updateButtonStyles();
  }

  updateButtonStyles() {
    const walkButton = document.getElementById('walk');
    const boatButton = document.getElementById('boat');

    if (walkButton) {
      walkButton.classList.toggle('activeSwitch', this.walkActive);
      walkButton.classList.toggle('inactiveSwitch', !this.walkActive);
    }

    if (boatButton) {
      boatButton.classList.toggle('activeSwitch', this.boatActive);
      boatButton.classList.toggle('inactiveSwitch', !this.boatActive);
    }
  }


  checkMoney()
  {
    let allMoney=0;
    if(this.selectedCharacter)
    {

      allMoney+=this.selectedCharacter.copper/100;
      allMoney+=this.selectedCharacter.silver/10;
      allMoney+=this.selectedCharacter.golden;
      allMoney+=this.selectedCharacter.electrum*5;
      allMoney+=this.selectedCharacter.platinum*10;
    }
    return allMoney;
  }

  nearestCity(character:any)
  {
     let newStart = character.partCoordinates;
      let closestCity = this.cities.map((city: { coordinates: string; }) => ({
        ...city,
        distance: this.calculateSegmentLength([[newStart[1], newStart[0]], city.coordinates.split(/,\s*/)])
      })).sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance).slice(0, 10);


      let nearestCity = closestCity.map((city: { coordinates: string; }) => {
        this.ShortWay.start = [newStart[1], newStart[0]];
        this.ShortWay.end = city.coordinates.split(/,\s*/);
        this.ShortSee.start = [newStart[1], newStart[0]];
        this.ShortSee.end = city.coordinates.split(/,\s*/);
        let road = this.ShortWay.GetShortestRoad();
        let sea = this.ShortSee.GetShortestRoad();
        if (road != null) {
          let roadLength = ShortestWay.ReturnLength(road);
          return {...city, distance: roadLength, changedWay: road.GetRoad()}
        } else if (sea != null) {
          let seaLength = ShortestWay.ReturnLength(sea);
          return {...city, distance: seaLength, changedWay: sea.GetRoad()}
        } else {
          return {...city, distance: 999999}
        }
      }).sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance).slice(0, 1);
  return nearestCity;
  }

  cancelJourney(character:any) {
    this.displayPopup = false;
      let newStart = character.partCoordinates;

    if (!character.ifFlying) {

        let newStart = character.partCoordinates;
      let closestCity = this.cities.map((city: { coordinates: string; }) => ({
        ...city,
        distance: this.calculateSegmentLength([[newStart[1], newStart[0]], city.coordinates.split(/,\s*/)])
      })).sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance).slice(0, 10);


      let nearestCity = closestCity.map((city: { coordinates: string; }) => {
        this.ShortWay.start = [newStart[1], newStart[0]];
        this.ShortWay.end = city.coordinates.split(/,\s*/);
        this.ShortSee.start = [newStart[1], newStart[0]];
        this.ShortSee.end = city.coordinates.split(/,\s*/);
        let road = this.ShortWay.GetShortestRoad();
        let sea = this.ShortSee.GetShortestRoad();
        if (road != null) {
          let roadLength = ShortestWay.ReturnLength(road);
          return {...city, distance: roadLength, changedWay: road.GetRoad()}
        } else if (sea != null) {
          let seaLength = ShortestWay.ReturnLength(sea);
          return {...city, distance: seaLength, changedWay: sea.GetRoad()}
        } else {
          return {...city, distance: 999999}
        }
      }).sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance).slice(0, 1);

      const date = new Date();
      let dateOfStart = new Date().toISOString();
      let dateOfEnd = new Date(date.getTime() + 35000).toISOString();


      let timeCost = Math.floor(nearestCity[0].distance * 2.39401496 / 100);
      //date.setDate(date.getDate() + timeCost);


      let nearestCityCoordinates = nearestCity[0].coordinates.split(/,\s*/);
      //console.log(JSON.stringify(nearestCity[0].changedWay));
      let wayPoints = this.orderSegments(JSON.parse(JSON.stringify(nearestCity[0].changedWay)), [newStart[0], newStart[1]], [nearestCityCoordinates[1], nearestCityCoordinates[0]])


        wayPoints =  { orderedSegments: wayPoints.orderedSegments.reverse(),lastMatch:true};
        wayPoints.orderedSegments.map(segment => {
          segment.coordinates.reverse()
        });



      let indexSegment = 1;
      let indexPart = 1;
      for (let i = 0; i < wayPoints.orderedSegments.length; i++) {
        for (let j = 0; j < wayPoints.orderedSegments[i].coordinates.length; j++) {
          if (wayPoints.orderedSegments[i].coordinates[j].toString() == newStart.toString()) {
            indexSegment = i;
            indexPart = j;
            break
          }
        }



      }

       if(indexPart!=wayPoints.orderedSegments[indexSegment].coordinates.length-1) {
      wayPoints.orderedSegments.splice(0, indexSegment);
      wayPoints.orderedSegments[indexSegment].coordinates.splice(0, indexPart);
    }


      this.characters.map((character1: {
          updateRoad: boolean;
        road: any;
        id: any; WayCoordinates: any; dateOfStart: string; dateOfEnd: string; newCityLocation: any; location: string
      }) => {
        if (character1.id == character.id) {
          character1.location = `${newStart[1]},${newStart[0]}`;
          character1.WayCoordinates = wayPoints.orderedSegments;
          character1.dateOfStart = date.toISOString();
          character1.dateOfEnd = dateOfEnd;
          character1.newCityLocation = nearestCity[0].name;
          character1.updateRoad=true;
          this.map.removeLayer(character1.road);


        }
      })


      let dataToUpdate: any = {
        location: `${newStart[1]},${newStart[0]}`,
        inWay: character.inWay,
        WayCoordinates: wayPoints.orderedSegments,
        dateOfStart: date.toISOString(),
        dateOfEnd: dateOfEnd,
        newCityLocation: nearestCity[0].name
      };
      this.apiMap.setInWay(dataToUpdate, character.id).subscribe();


    }
  else
{


      this.characters.map((character1: {
        updateRoad: boolean;
        marker: null;
        inWay: boolean;
        road: any;
        id: any; WayCoordinates: any; dateOfStart: string|null; dateOfEnd: string|null; newCityLocation: any; location: string
      }) => {
        if (character1.id == character.id) {
          character1.inWay=false;
          character1.WayCoordinates = '';
          character1.dateOfStart = null;
          character1.dateOfEnd = null
          character1.newCityLocation = '';
          this.map.removeLayer(character1.road);
          this.map.removeLayer(character.marker);
          character1.marker=null;
          character1.updateRoad=true;
          this.arrivedCharacters.push(character1);
          this.displayWayEnd=true;
        }
              let dataToUpdate: any = {
                inWay: false,
                WayCoordinates: '',
                dateOfStart: null,
                dateOfEnd: null,
                newCityLocation: '',
                selectedTransport:'',
                ifFlying:false
              };
        this.apiMap.setInWay(dataToUpdate,character.id).subscribe();
      })
}
}
}
