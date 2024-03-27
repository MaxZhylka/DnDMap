import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-opend-news',
  templateUrl: './opend-news.component.html',
  styleUrl: './opend-news.component.css'
})
export class OpendNewsComponent {
@Input() news!:any;
@Output() close= new EventEmitter<void>();
 onClose() {
    this.close.emit();
  }
}
