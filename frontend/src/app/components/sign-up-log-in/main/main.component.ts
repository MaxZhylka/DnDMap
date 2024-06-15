import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
 mainImage:string="assets/img/main.png";
 display!:boolean;
constructor(private  router:Router) {
}
  ngOnInit()
  {
    this.display = this.router.url == "/registration";
  }
 switchPanel() {
    this.display = !this.display;
    if (!this.display) {
      this.router.navigate(['/login']).then(success => {
        if (!success) {
          console.error('Navigation to /login failed');
        }
      }).catch(err => {
        console.error('Navigation to /login threw an error', err);
      });
    } else {
      this.router.navigate(['/registration']).then(success => {
        if (!success) {
          console.error('Navigation to /registration failed');
        }
      }).catch(err => {
        console.error('Navigation to /registration threw an error', err);
      });
    }
  }
}
