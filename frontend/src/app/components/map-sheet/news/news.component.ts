import {Component, Input} from '@angular/core';
import {News} from '../news-panel/news-panel.component'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  @Input() news!:News;

}
