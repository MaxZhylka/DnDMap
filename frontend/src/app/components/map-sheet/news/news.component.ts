import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  @Input() mainHeader!:string;
  @Input() mainImage!:string;
  @Input() mainText!:string;

}
