import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CharacterService } from "../../../services/character.service";

@Component({
  selector: 'app-photo-cropper',
  templateUrl: './photo-cropper.component.html',
  styleUrls: ['./photo-cropper.component.css']
})
export class PhotoCropperComponent implements OnInit {
  portrait: string = '';
  imgChangeEvt: any = '';
  cropImagePreview: any = '';
  display: boolean = false;
  originalFileName: string = '';
  croppedFile: File | null = null;

  constructor(private imageUploadService: CharacterService) {}

  @Input() image: any;
  @Output() close = new EventEmitter<void>();
  @Output() outputImage: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.imageChangeEvent(this.image);
  }

  onClose() {
    if (this.croppedFile) {
      this.imageUploadService.imageToLoad=this.croppedFile;
    }
    this.close.emit();
  }

  imageChangeEvent(event: any) {
    this.imgChangeEvt = event;
    if (event.target.files && event.target.files.length > 0) {
      this.originalFileName = event.target.files[0].name;
    }
  }

  cropImg(event: ImageCroppedEvent) {
    this.cropImagePreview = event.objectUrl;
    this.outputImage.emit(event.objectUrl);
    if (event.blob) {
      const fileName = this.generateFileName(this.originalFileName);
      this.croppedFile = new File([event.blob], fileName, { type: 'image/png' });
    }
  }

  generateFileName(originalName: string): string {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const extension = originalName.split('.').pop();
    const baseName = originalName.replace(/\.[^/.]+$/, '');
    return `${baseName}_${timestamp}.${extension}`;
  }



  imgLoad() {}
  initCropper() {}
  imgFailed() {
    alert('Image load failed');
  }
}
