import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
 @Output() SwitchPanel:EventEmitter<void>= new EventEmitter<void>();
 GoogleImg:string="assets/img/Google.png";
}
