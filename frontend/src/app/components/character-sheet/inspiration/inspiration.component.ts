import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.css'
})
export class InspirationComponent implements OnInit, OnDestroy{
inspirOne:string='../../../assets/img/inspirone.png';
inspirTwo:string='../../../assets/img/inspirthree.png';
currentImage: string = this.inspirOne;
subscription= new Subscription();
constructor(private characterService:CharacterService)  {
}


ngOnInit() {

     this.subscription=this.characterService.characterData$.subscribe({next:(data)=>{
      this.currentImage= data.inspiration?this.inspirTwo:this.inspirOne;
      }
    });
}
ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  toggleImage() {
    this.characterService.inspiration = !this.characterService.inspiration;
     this.currentImage= this.characterService.inspiration?this.inspirTwo:this.inspirOne;
  }
}
