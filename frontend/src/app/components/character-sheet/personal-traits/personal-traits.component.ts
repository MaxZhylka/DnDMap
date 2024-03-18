import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-personal-traits',
  templateUrl: './personal-traits.component.html',
  styleUrl: './personal-traits.component.css'
})
export class PersonalTraitsComponent {
  @Input() personalId: string='';
  @Input() personalText: string='';
}
