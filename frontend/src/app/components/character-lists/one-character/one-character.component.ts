import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrl: './one-character.component.css'
})

export class OneCharacterComponent implements OnInit {
  @Input() id!:number;
  @Input() characterData!:any;
  avatar:string='assets/img/img.png';
  pointer:string='assets/img/pointer.png';
  constructor(private router:Router)
{

}
  ngOnInit() {
    if(this.characterData.appearance!=null)
    {
      this.avatar=this.characterData.appearance;
    }
  }
  openList(): void {
    this.router.navigate(['character-list', this.id]);
  }
}
