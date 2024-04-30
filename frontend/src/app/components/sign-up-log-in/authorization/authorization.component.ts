import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {
 @Output() SwitchPanel:EventEmitter<void>= new EventEmitter<void>();
  GoogleImg:string="assets/img/Google.png";
   auth: FormGroup = new FormGroup({
    email: new FormControl('',[emailFormatValidator, Validators.required]),
    password: new FormControl('', [passwordComplexityValidator, Validators.required])
  });
}



export function passwordComplexityValidator(): ValidatorFn {
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

export function emailFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // не валидировать пустое значение
    }

    const hasAtSign = value.includes('@');
    const hasDot = value.includes('.');

    // Проверяем, что оба символа присутствуют после первого символа и перед последним
    if (hasAtSign && hasDot && value.indexOf('@') > 0 && value.indexOf('.') > value.indexOf('@') + 1 && value.indexOf('.') < value.length - 1) {
      return null; // валидный email
    } else {
      return { emailFormat: 'Email должен содержать @ и . в правильном формате' };
    }
  };
}
