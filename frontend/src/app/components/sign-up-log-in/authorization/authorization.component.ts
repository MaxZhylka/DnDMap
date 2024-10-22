import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  @Output() SwitchPanel: EventEmitter<void> = new EventEmitter<void>();
  GoogleImg: string = "assets/img/Google.png";
  auth: FormGroup = new FormGroup({
    email: new FormControl('', [this.emailFormatValidator(), Validators.required]),
    password: new FormControl('', [this.passwordComplexityValidator(), Validators.required])
  });
  displayError: boolean = false;
  invalidData: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

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
      const isValidPassword = hasLowerCase && hasNumeric && isValidLength;
      return isValidPassword ? null : {
        passwordComplexity: {
          valid: false,
          message: 'Пароль должен содержать минимум 8 символов, включать цифры'
        }
      };
    };
  }

  Submit() {
    if (this.auth.invalid) {
      this.invalidData = true;
      return;
    }
    this.invalidData = false;

    this.authService.login(this.auth.get('email')?.value, this.auth.get('password')?.value).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['']);
      },
      error: () => {
        this.displayError = true;
      }
    });
  }
}
