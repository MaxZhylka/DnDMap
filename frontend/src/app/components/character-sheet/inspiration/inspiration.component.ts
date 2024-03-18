import { Component } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.css'
})
export class InspirationComponent {
inspirOne:string='../../../assets/img/inspirone.png';
inspirTwo:string='../../../assets/img/inspirtwo.png';
currentImage: string = this.inspirOne;
toggleImage() {
    this.currentImage = (this.currentImage === this.inspirOne) ? this.inspirTwo : this.inspirOne;
  }
}
