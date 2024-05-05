import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "../../components/sign-up-log-in/main/main.component";
import {RegistrationComponent} from "../../components/sign-up-log-in/registration/registration.component";
import {AuthorizationComponent} from "../../components/sign-up-log-in/authorization/authorization.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AuthGuard} from "../../services/authGuard.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserProfileComponent} from "../../components/user-profile/user-profile.component";



@NgModule({
  declarations: [MainComponent, RegistrationComponent, AuthorizationComponent, UserProfileComponent],
  imports: [
    CommonModule,
      ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard]
})
export class RegistrationModule { }
