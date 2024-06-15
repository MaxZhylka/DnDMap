import {Component, Inject, NgZone, ElementRef, OnInit, PLATFORM_ID, Renderer2, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService, UserData} from "../../services/auth.service";
import {isPlatformBrowser} from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  @ViewChild('openButton', { static: false }) OpenButton!: ElementRef;
  display: boolean = false;
  Deldisplay: boolean = false;
  displayLeft:number=-480;
  imageToCrop: any;
  dynamicValue = 'exampleValue';
  changes: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.maxLength(30), Validators.required]),
    email: new FormControl('', [this.emailFormatValidator(), Validators.required]),
    password: new FormControl('', [this.passwordComplexityValidator(), Validators.required]),
    oldPassword: new FormControl('', [this.passwordComplexityValidator(), Validators.required]),
  });


  user!: UserData;

   constructor(private renderer: Renderer2, private el: ElementRef,private ngZone: NgZone,@Inject(PLATFORM_ID)  private platformId: any,private router: Router,private authService: AuthService) {}

     ngOnInit() {
if(isPlatformBrowser(this.platformId)) {
       this.authService.getUserData().subscribe({
         next: (data) => {

              this.user = data;
            this.user.avatar=`http://127.0.0.1:8000`+this.user.avatar;
          },


         error: (error) => console.error('Failed to fetch user data', error)
       });
     }

  }

  emailFormatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasAtSign = value.includes('@');
      const hasDot = value.includes('.');
      if (hasAtSign && hasDot && value.indexOf('@') > 0 && value.indexOf('.') > value.indexOf('@') + 1 && value.indexOf('.') < value.length - 1) {
        return null;
      } else {
        return { emailFormat: 'Email должен содержать @ и . в правильном формате' };
      }
    }
  }

   passwordComplexityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      if (!password) return null;

      const hasLowerCase = /[a-z]/.test(password);
      const hasNumeric = /\d/.test(password);
      const isValidLength = password.length >= 8;
      const isValidPassword =  hasLowerCase && hasNumeric  && isValidLength;
      return isValidPassword ? null : {
        passwordComplexity: {
          valid: false,
          message: 'Пароль должен содержать минимум 8 символов, включать цифры'
        }
      };
    };
  }


  setDynamicAttribute() {
    const element = this.el.nativeElement.querySelector('div');
    this.renderer.setAttribute(element, 'data-valid-attribute', this.dynamicValue);
  }
getData(event: any) {
    this.user.avatar = event;
  }
togglePanel = ()=>
  {
    this.Deldisplay = true;
  }
  onselectFile(event: any)
  {
    this.imageToCrop = event;
    this.display = true;
  }
  close()
  {
    this.display=false;
    this.Deldisplay=false;
        const fileInput = this.imageToCrop.target as HTMLInputElement;
    fileInput.value = '';
  }


  changeNick() {
    this.authService.updateName(this.changes.get('login')?.value).subscribe(response => {
      console.log(response);
      window.location.reload()
    });
  }
  changePost() {
        this.authService.updateEmail(this.changes.get('email')?.value).subscribe(response => {
      console.log(response);
      window.location.reload()
    });
  }
  changePassword()
  {
           this.authService.updatePassword( this.changes.get('oldPassword')?.value,this.changes.get('password')?.value).subscribe(response => {
      console.log(response);
      window.location.reload()
    });
  }
}
