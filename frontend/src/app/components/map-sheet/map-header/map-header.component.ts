import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';

import {filter, ignoreElements, Subscription} from "rxjs";
import {MapService} from "../../../services/map.service";
import {NavigationEnd, Router} from '@angular/router';
import {AuthService, UserData} from "../../../services/auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {jsDocComment} from "@angular/compiler";
import {isPlatformBrowser} from "@angular/common";



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
export class MapHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
@ViewChild('searchField') searchField!: ElementRef;
   @ViewChild('openButton', { static: false }) OpenButton!: ElementRef;
map:boolean=false;
isMenuVisible: boolean = false;
  cities: City[]=[];
    isActiveMapButton = false;
  isActiveListsButton = false;
   private routerSubscription!: Subscription;
  searchQuery:string="";
  hintMargin={};
  ignoreBlur: boolean= false;
  searchedCities: City[]=[];
  newsImg: string=  "../../assets/img/news.png";
  hint:string="";
  displayLeft:number=-480;
  Profile: string = "assets/img/pofile.png";
  userData!: any;
  @ViewChild('avatar', { static: false }) Avatar!:ElementRef;
  ignoredAvatar:ElementRef[]=[]

   constructor(  private cdr: ChangeDetectorRef, private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: any,public apiMap: MapService, private router: Router, private authService: AuthService) {

  }

  ngAfterViewInit() {
      this.apiMap.ignoredElement.push(this.OpenButton);
      this.updateIgnoredAvatar();

  }


  get IgnoredElement()
  {
    return this.apiMap.ignoredElement;
  }

    get IgnoredElementAvatar()
  {
    return this.ignoredAvatar;
  }

ngOnInit() {
  this.getCities();
  if (isPlatformBrowser(this.platformId)) {
    this.authService.getUserAvatar().subscribe({
      next: (data) => {

        this.userData = data;

         this.userData.avatar = `http://127.0.0.1:8000${this.userData.avatar}`;
         this.cdr.detectChanges();
        setTimeout(() => {
        this.updateIgnoredAvatar();
      });
      },
      error: (error) => console.error('Failed to fetch user data', error)
    });
  }

  this.routerSubscription = this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.checkUrl();
    }
  });
}
private updateIgnoredAvatar() {

    if (this.Avatar) {
      this.ignoredAvatar.push(this.Avatar);
    }
  }
 ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  checkUrl() {
    const currentUrl = this.router.url;

      this.isActiveMapButton =currentUrl === '/';
         this.map=currentUrl === '/';
    this.isActiveListsButton = currentUrl === '/character-list';
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
    getMarginTop(index: number): number {
    const pixelValue = 2.6 + 1.4* (index - 1);

    return pixelValue;
  }
suggestCities() {
  if (this.searchQuery == "") {
    this.searchedCities = [];
    this.hint = "";
    return;
  }

  this.hint = "";
  const searchQueryWidth = document.createElement("span");
  searchQueryWidth.style.visibility = "hidden";
  searchQueryWidth.style.whiteSpace = "pre";
  searchQueryWidth.style.fontSize = "1.2vw";
  searchQueryWidth.style.border = "none";
  searchQueryWidth.style.fontFamily = '"Times New Roman", sans-serif';
  searchQueryWidth.innerText = this.searchQuery;

  document.body.appendChild(searchQueryWidth);


  const lastLetterWidth = searchQueryWidth.offsetWidth;


  const fontSize = parseFloat(getComputedStyle(searchQueryWidth).fontSize);
  const calcMargin = 0.4 + (lastLetterWidth / fontSize) ;


  this.hintMargin = {
    "margin-left.em": calcMargin
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
    this.router.navigate(['/']);
}
redirectToProfile() {
    this.router.navigate(['/profile']);
  }


}

