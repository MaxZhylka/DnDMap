import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-traits-bar',
  templateUrl: './personal-traits-bar.component.html',
  styleUrl: './personal-traits-bar.component.css'
})
export class PersonalTraitsBarComponent {
  personaltraitsid:string[]=['personalTraits','ideals','bonds','flaws']
  personaltraitstext:string[]=['ЧЕРТЫ ХАРАКТЕРА','ИДЕАЛЫ','ПРИВЯЗАННОСТИ','СЛАБОСТИ']

}
