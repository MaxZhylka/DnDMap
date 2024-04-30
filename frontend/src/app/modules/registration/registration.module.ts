import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "../../components/sign-up-log-in/main/main.component";
import {RegistrationComponent} from "../../components/sign-up-log-in/registration/registration.component";
import {AuthorizationComponent} from "../../components/sign-up-log-in/authorization/authorization.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [MainComponent, RegistrationComponent, AuthorizationComponent],
  imports: [
    CommonModule,
      ReactiveFormsModule
  ]
})
export class RegistrationModule { }
