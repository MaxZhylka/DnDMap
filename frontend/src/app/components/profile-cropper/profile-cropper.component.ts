import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageCroppedEvent, ImageCropperModule} from "ngx-image-cropper";
import {CharacterService} from "../../services/character.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile-cropper',
  standalone: true,
    imports: [
        ImageCropperModule
    ],
  templateUrl: './profile-cropper.component.html',
  styleUrl: './profile-cropper.component.css'
})
export class ProfileCropperComponent {
portrait: string = '';
  imgChangeEvt: any = '';
  cropImagePreview: any = '';
  display: boolean = false;
  originalFileName: string = '';
  croppedFile: File | null = null;

  constructor(private imageUploadService: AuthService) {}

  @Input() image: any;
  @Output() close = new EventEmitter<void>();
  @Output() outputImage: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.imageChangeEvent(this.image);
  }

  onClose() {
    if (this.croppedFile) {
    this.imageUploadService.imageToLoad=this.croppedFile;

     this.imageUploadService.updateImage().subscribe(
       {
         next:(data)=>{
              console.log(data);
         },
         error:(data)=>
         {
            console.log(data);
           console.log('Картинка НЕ загружена');
         }
       }
     )
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
