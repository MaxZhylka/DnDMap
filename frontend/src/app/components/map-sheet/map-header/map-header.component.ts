import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {filter, ignoreElements} from "rxjs";
import {MapService} from "../../../services/map.service";
import { Router } from '@angular/router';
import {AuthService, UserData} from "../../../services/auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";



interface City
{
  name:string;
  coordinates: string;
  disciption: string;

}



@Component({
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrl: './map-header.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(100)
      ])
    ])
  ]
})
export class MapHeaderComponent implements OnInit, AfterViewInit{
@ViewChild('searchField') searchField!: ElementRef;
   @ViewChild('openButton', { static: false }) OpenButton!: ElementRef;

isMenuVisible: boolean = false;
  cities: City[]=[];
  searchQuery:string="";
  hintMargin={};
  ignoreBlur: boolean= false;
  searchedCities: City[]=[];
  newsImg: string=  "../../assets/img/news.png";
  hint:string="";
  displayLeft:number=-480;
  Profile: string = "assets/img/pofile.png";
  userData!: UserData;
   constructor(public apiMap: MapService, private router: Router, private authService: AuthService) {
      this.authService.getUserData().subscribe({
        next: (data) => { data.avatar = `http://127.0.0.1:8000${data.avatar}`;
          this.userData = data; },
        error: (error) => console.error('Failed to fetch user data', error)
      });
  }

  ngAfterViewInit() {
      this.apiMap.ignoredElement.push(this.OpenButton);

  }


  get IgnoredElement()
  {
    return this.apiMap.ignoredElement;
  }

  ngOnInit() {
     this.getCities();

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

    this.ignoreBlur = false;
    return;
  }


  this.hint = "";
  this.searchedCities = [];
}
onLogout() {
  this.authService.logout().subscribe(() => {
    this.router.navigate(['/login']);
  });
}
toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
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
redirectToCharsheet() {
    this.router.navigate(['/character-list']);
  }
  redirectToMap() {
    this.router.navigate(['/map']);
}
redirectToProfile() {
    this.router.navigate(['/profile']);
  }


}

