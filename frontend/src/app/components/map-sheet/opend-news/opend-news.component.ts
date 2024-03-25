import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-opend-news',
  templateUrl: './opend-news.component.html',
  styleUrl: './opend-news.component.css'
})
export class OpendNewsComponent {
@Input() news!:any;

}
