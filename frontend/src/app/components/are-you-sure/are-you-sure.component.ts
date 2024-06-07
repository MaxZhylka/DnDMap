import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnInit,
  Output, PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import {DatePipe} from "@angular/common";
import {News} from "../map-sheet/news-panel/news-panel.component";
import {fadeInOut} from "../../animations/slideInOut";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-are-you-sure',
  animations:[fadeInOut],
  templateUrl: './are-you-sure.component.html',
  styleUrl: './are-you-sure.component.css'
})
export class AreYouSureComponent{
  @Output() close= new EventEmitter<void>();
  @Input() opacity!:number;
  constructor(private router: Router,private authService: AuthService) {}
  onClose() {
    this.close.emit();

  }
  deleteProf() {
    this.authService.deleteCharacter().subscribe({
      next: () => {
        this.router.navigate(["/registration"]);
      },
      error: (errorData) => {
        console.log(errorData);
      }
    });
  }
  }

