import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../../services/character.service";

@Component({
  selector: 'app-general-sheet',
  templateUrl: './general-sheet.component.html',
  styleUrls: ['./general-sheet.component.css']
})
export class GeneralSheetComponent implements OnInit {
  characters: any[] = [];
    selectedFile: File | null = null;
  constructor(public characterService: CharacterService) {}

  ngOnInit() {
    setTimeout(() => {
         this.characterService.getMyCharacters().subscribe({
      next: (value) => {
        this.characters = value;
      },
      error: (error) => {
        console.log(error);
      }
    });
    }, 25);
  }
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
 onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/json') {
      this.selectedFile = file;
      this.uploadCharacter();
    } else {

    }
  }
uploadCharacter() {

    this.characterService.createCharacter(this.selectedFile).subscribe(
      { next:(data)=>{
 this.updateData();
  }}
    )
  }
  updateData()
  {
    this.characterService.getMyCharacters().subscribe({
      next: (value) => {
        this.characters = value;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
