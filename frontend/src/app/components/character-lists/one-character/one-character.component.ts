import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {CharacterService} from "../../../services/character.service";

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
  context:boolean=false;
  jsonData: string = '';
  @Output() updateData=new EventEmitter<void>;

  constructor(private router:Router, private characterService:CharacterService)
{

}
  ngOnInit() {
    if(this.characterData.appearance!=null)
    {
      this.avatar=this.characterData.appearance;
      this.downloadData();
    }
  }
  openList(): void {
    this.router.navigate(['character-list', this.id]);
  }
  getExperience(level:number):number | null {
  const experienceByLevel:{[key:number]:number} = {
    1: 0,
    2: 300,
    3: 900,
    4: 2700,
    5: 6500,
    6: 14000,
    7: 23000,
    8: 34000,
    9: 48000,
    10: 64000,
    11: 85000,
    12: 100000,
    13: 120000,
    14: 140000,
    15: 165000,
    16: 195000,
    17: 225000,
    18: 265000,
    19: 305000,
    20: 355000,
    21:355000
  };

  return experienceByLevel[level] || null;
}
downloadData() {
  const encodedData = encodeURIComponent(JSON.stringify(this.characterData));
  const blob = new Blob([encodedData], { type: 'application/json' });
  this.jsonData = window.URL.createObjectURL(blob);
}

displayContext(event:Event)
{

  event.stopPropagation()
  this.context=!this.context;

}
close()
{
  this.context=false;
}
downloadClose(event:Event)
{
  event.stopPropagation();
  this.context=false;
}
delete(event:Event)
{
  event.stopPropagation()
  this.characterService.deleteCharacter(this.characterData.id).subscribe(
    {
      next:()=>{
        this.updateData.emit();
      },
      error:(errorData)=>
      {
        console.log(errorData);
      }

    }
  )


  ;

}

}
