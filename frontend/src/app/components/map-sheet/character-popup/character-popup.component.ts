import {ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MapComponent} from "../map-sheet/map.component";

@Component({
  selector: 'app-character-popup',
  templateUrl: './character-popup.component.html',
  styleUrl: './character-popup.component.css'
})
export class CharacterPopupComponent {
  @Input() character: any;
    @Input() position!: { x: number, y: number };
    @Input() display!:boolean;
    @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
    nearestCity:any;
    @Input() mapComponent!: MapComponent;
    displayWarning:boolean=false;
    constructor(public cdr: ChangeDetectorRef) {}
   get calculateRemainingTime()
   {
      let date = new Date();
       const endDate = new Date(this.character.dateOfEnd); // Преобразуем строку в объект Date


      let diff = endDate.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
   const seconds = Math.floor((diff / (1000 )) % 60);
   return `${days}д ${hours}ч ${minutes}мин ${seconds}c`;
   }
     updatePosition(newPosition: { x: number, y: number }) {
    this.position = newPosition;
    this.cdr.detectChanges(); // Обновить позицию в представлении
  }
   cancelJourney()
   {
     this.cancel.emit(this.character);
     this.displayWarning=false;
   }
     doDisplay()
  {
    this.nearestCity=this.mapComponent.nearestCity(this.character);
    this.displayWarning=true;
  }
  closeAll()
  {
    this.display=false;
    this.displayWarning=false;
  }
}
