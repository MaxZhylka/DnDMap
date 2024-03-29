import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../../services/map.service";
import {filter, ignoreElements} from "rxjs";
import {OpendNewsComponent} from "../opend-news/opend-news.component";
import {NewsPanelComponent} from "../news-panel/news-panel.component";


interface City
{
  name:string;
  coordinates: string;
  disciption: string;

}
@Component({
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrl: './map-header.component.css'
})

export class MapHeaderComponent implements  OnInit{
  @ViewChild('searchField') searchField!: ElementRef;
  @ViewChild('openButton', { static: true }) OpenButton!: ElementRef;


  cities: City[]=[];
  searchQuery:string="";
  hintMargin={};
  ignoreBlur: boolean= false;
  searchedCities: City[]=[];
  newsImg: string=  "../../assets/img/news.png";
  hint:string="";
  displayLeft:number=-480;

   constructor(public apiMap: MapService) {
  }

 get IgnoredElement()
  {
    return this.apiMap.ignoredElement;
  }

  ngOnInit() {
     this.getCities();
      this.apiMap.ignoredElement.push(this.OpenButton);
}

moveToCity() {
  let temp: City | undefined;

  if (this.searchQuery !== '') {
    for (const city of this.cities) {
      if (city.name.toLowerCase().startsWith(this.searchQuery.toLowerCase())) {
        temp = city;

        this.apiMap.flyTo(temp.coordinates);

        this.ResetFocus();
        break;
      }
    }
  }
}


  togglePanel = ()=>
  {
    if(this.displayLeft==-480)
    {
      this.displayLeft=0;
    }
    else {
      this.displayLeft=-480;
    }
  }
  closePanel=()=>
  {
     this.displayLeft=-480;
  }
suggestCities() {
     if(this.searchQuery=="")
     {
       this.searchedCities=[];
       this.hint="";
       return;
     }
  this.hint = '';
  const searchQueryWidth = document.createElement('span');
  searchQueryWidth.style.visibility = 'hidden';
  searchQueryWidth.style.whiteSpace="pre"
  searchQueryWidth.style.fontSize='20px';
  searchQueryWidth.style.border='none';
  searchQueryWidth.style.fontFamily=" \"Times New Roman\",  sans-serif"
  searchQueryWidth.innerText = this.searchQuery;

  document.body.appendChild(searchQueryWidth);

  const lastLetterWidth = searchQueryWidth.offsetWidth;
  const calcMargin = 16 + lastLetterWidth;

  this.hintMargin = {
    'margin-left.px': calcMargin
  };
  document.body.removeChild(searchQueryWidth);
  this.searchedCities = this.cities.filter(city => city.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()));
  if (this.searchedCities.length > 0 && this.searchQuery) {
    const matchingCity = this.searchedCities[0].name;
    if (matchingCity.toLowerCase().startsWith(this.searchQuery.toLowerCase())) {
      this.hint = matchingCity.substring(this.searchQuery.length);

    }
  }
}

ResetFocus=()=>
{
  if (this.searchField) {
      this.searchQuery="";
      this.hint="";
      this.searchedCities=[];
      this.searchField.nativeElement.blur();
    }
}
Blur() {
  if (this.ignoreBlur) {
    // Если флаг установлен, просто сбросьте его и не выполняйте остальную часть функции
    this.ignoreBlur = false;
    return;
  }

  // Остальная логика функции, которая должна выполняться при потере фокуса
  this.hint = "";
  this.searchedCities = [];
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


  protected readonly ElementRef = ElementRef;
  protected readonly MapService = MapService;
  protected readonly ignoreElements = ignoreElements;
}
