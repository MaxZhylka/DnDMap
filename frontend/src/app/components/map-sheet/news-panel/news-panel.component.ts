import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
  selectedNews!: News;
  opacity =0;
  ngOnInit() {this.getNews()
  }

  constructor(private apiMap: MapService){}
closeFullNews() {
  this.opacity = 0;
  setTimeout(() => {
    this.display = false;
    this.apiMap.ignoredElement.pop();
  }, 150);
}


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

    this.opacity=0;
    this.selectedNews = news;
    this.display = true;
     setTimeout(() => {
    this.opacity = 1;
  }, 0);
  }


}
