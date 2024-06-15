import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService, UserData} from "../../../services/auth.service";
import {MapService} from "../../../services/map.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-lists-header',
  templateUrl: './lists-header.component.html',
  styleUrl: './lists-header.component.css'
})
export class ListsHeaderComponent implements AfterViewInit{
@ViewChild('searchField') searchField!: ElementRef;
   @ViewChild('openButton', { static: false }) OpenButton!: ElementRef;

  hintMargin={};
  ignoreBlur: boolean= false;
  newsImg: string=  "../../assets/img/news.png";
  hint:string="";
  displayLeft:number=-480;
  Profile: string = "assets/img/pofile.png";
  userData!: UserData;
   constructor(public apiMap: MapService,private router: Router, private authService: AuthService) {
      this.authService.getUserData().subscribe({
        next: (data) => { data.avatar = `http://127.0.0.1:8000${data.avatar}`;
          this.userData = data; },
        error: (error) => console.error('Failed to fetch user data', error)
      });
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


get IgnoredElement()
  {
    return this.apiMap.ignoredElement;
  }



redirectToCharsheet() {
    this.router.navigate(['/characterlist']);
  }
  redirectToMap() {
    this.router.navigate(['']);
}

  ngAfterViewInit(): void {
     this.apiMap.ignoredElement.push(this.OpenButton);
  }


}
