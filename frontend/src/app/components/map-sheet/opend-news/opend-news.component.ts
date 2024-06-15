import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MapService} from "../../../services/map.service";
import {News} from "../news-panel/news-panel.component";



@Component({
  selector: 'app-opend-news',
  templateUrl: './opend-news.component.html',
  styleUrl: './opend-news.component.css'
})
export class OpendNewsComponent implements  OnInit{
@Input() news!:News;
@Output() close= new EventEmitter<void>();
@ViewChild('OpenNews', { static: true }) openNews!: ElementRef;
@Input() opacity!:number;
outputHeader!: string;
outputText!:string;
outputImage!:string;
  ngOnInit() {
    this.apiMap.ignoredElement.push(this.openNews);
    this.initOutput();
  }

  constructor(public  apiMap: MapService) {


}
  onClose() {
    this.close.emit();

  }
  initOutput()
  {

     if(this.news.secondaryText=="0")
    {
      this.outputText=this.news.mainText;
    }
    else
    {
      this.outputText=this.news.secondaryText;
    }

    if(this.news.secondaryHeader=="0")
    {
      this.outputHeader=this.news.mainHeader;
    }
    else
    {
      this.outputHeader=this.news.secondaryHeader;
    }

    if(this.news.secondaryImage=="http://127.0.0.1:8000/media/0")
    {
      this.outputImage=this.news.mainImage;
    }
    else
    {
      this.outputImage=this.news.secondaryImage;
    }
  }

}
