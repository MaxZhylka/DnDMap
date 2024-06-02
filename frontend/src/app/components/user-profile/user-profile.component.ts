import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService, UserData} from "../../services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{

   changes: FormGroup = new FormGroup({
    login: new FormControl('',[Validators.maxLength(30), Validators.required]),
    email: new FormControl('',[this.emailFormatValidator(), Validators.required]),
    password: new FormControl('', [this.passwordComplexityValidator(), Validators.required]),
     oldPassword: new FormControl('', [this.passwordComplexityValidator(), Validators.required])
  });


  userData!: UserData;

   constructor(private authService: AuthService) {}

     ngOnInit(): void {

      this.authService.getUserData().subscribe({
        next: (data) => { data.avatar = `http://127.0.0.1:8000${data.avatar}`;
          this.userData = data; },
        error: (error) => console.error('Failed to fetch user data', error)
      });
  }
   emailFormatValidator(): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
       const value = control.value;

       if (!value ) {
         return null;
       }

       const hasAtSign = value.includes('@');
       const hasDot = value.includes('.');


       if (hasAtSign && hasDot && value.indexOf('@') > 0 && value.indexOf('.') > value.indexOf('@') + 1 && value.indexOf('.') < value.length - 1) {
         return null;
       } else {
         return {emailFormat: 'Email должен содержать @ и . в правильном формате'};
       }
     }
   }


   passwordComplexityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    if (!password) return null;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8;

    const isValidPassword = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && isValidLength;

    return isValidPassword ? null : {
      passwordComplexity: {
        valid: false,
        message: 'Пароль має містити мінімум 8 символів, включати великі і малі літери, цифри та спеціальні символи.'
      }
    };
  };
}
  changeNick()
  {

  }
  changePost()
  {

  }
  changePassword()
  {

  }
}
