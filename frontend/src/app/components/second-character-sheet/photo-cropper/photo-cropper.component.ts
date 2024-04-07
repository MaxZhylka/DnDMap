import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {attackData} from "../../character-sheet/attacks/attacks.component";
import {CharacterService} from "../../../services/character.service";
import {ImageCroppedEvent} from "ngx-image-cropper";

@Component({
  selector: 'app-photo-cropper',
  templateUrl: './photo-cropper.component.html',
  styleUrl: './photo-cropper.component.css'
})
export class PhotoCropperComponent implements OnInit{
  portrait:string = "";
  imgChangeEvt: any = "";
  cropImagePreview: any = "";
  display: boolean = false;
  constructor() {
  }
  @Input() image:any;
  @Output() close = new EventEmitter<void>;
  @Output() outputImage: EventEmitter<any> = new  EventEmitter<any>;
ngOnInit() {
  this.imageChangeEvent(this.image);
}

  onClose() {
    this.close.emit();
  }

  imageChangeEvent(event: any) {
    this.imgChangeEvt = event;
}

  cropImg(event: ImageCroppedEvent) {
    this.cropImagePreview = event.objectUrl;
    this.outputImage.emit(event.objectUrl);
  }

  imgLoad() {
  }
  initCropper(){}
  imgFailed(){
    alert()
  }
}
