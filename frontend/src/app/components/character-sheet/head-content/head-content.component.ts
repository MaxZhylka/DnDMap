import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrl: './head-content.component.css'
})
export class HeadContentComponent {
@Input() text: string='';
@Input()id: string='';
}
