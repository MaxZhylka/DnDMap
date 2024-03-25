import {Component, Input, OnInit} from '@angular/core';
import {MapService} from "../../../services/map.service";
import * as url from "url";

export interface News
{
  author:string;
  mainHeader:string;
  mainText:string;
  secondaryHeader:string;
  secondaryText:string;
  mainImage:string;
  secondaryImage:string;
  dateOfPublishing:Date;
}

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrl: './news-panel.component.css'
})
export class NewsPanelComponent implements OnInit{

 @Input() left!:number;
  Newses!:News[];
  display: boolean=false;
  selectedNews: News | null = null;

  ngOnInit() {this.getNews()
  }

  constructor(private apiMap: MapService){}

  getNews = () => {
  this.apiMap.getNews().subscribe({
    next: (data) => {
      this.Newses = data;

    },
    error: (error) => {
      console.log(error);
    }
  });
}

 displayFullNews(news: News) {
    this.selectedNews = news; // Збереження вибраної новини
    this.display = true; // Показати app-opend-news
  }


}
