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


  ngOnInit() {this.getNews()
  }

  constructor(private apiMap: MapService){}

  getNews = () => {
  this.apiMap.getNews().subscribe({
    next: (data) => {
      this.Newses = data.reverse();
      console.log(this.Newses);
    },
    error: (error) => {
      console.log(error);
    }
  });
}
display


}
