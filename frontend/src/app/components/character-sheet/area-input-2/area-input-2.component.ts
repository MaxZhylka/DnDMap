import {Component, Input, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";



@Component({
  selector: 'app-area-input2',
  templateUrl: './area-input-2.component.html',
  styleUrls: ['./area-input-2.component.css']
})
export class AreaInput2Component implements OnInit,AfterViewInit {

  @Input() spellLvl:number=0;
  @Input() SpellId:number=0;
  @Input() topText: string = '';
  @Input() botText: string = '';
  @Input() boxHeight: number = 135;
  @Input() boxWidth: number = 290;
  @Input() border: string = '2px solid black';
  @Input() borderRadius: number = 10;
  @ViewChild('inputField', {static: false}) inputField!: ElementRef;
  @ViewChild('contextMenu') contextMenu!: ElementRef;
  ignoredElement: any = [];
  currentLinkElement: HTMLAnchorElement | null = null;
  currentLink: string = '';
  text: string = '';
  inputHeight!: number;
  inputWidth!: number;
  isContextMenuVisible: boolean = false;
  contextMenuPosition = {x: 0, y: 0};
  selectedRange: any;
  selectedText: string = "";

  constructor(public characterService:CharacterService) {


  }

  @HostListener('window:resize', ['$event'])
onWindowResize() {
  this.updateSelectionAndMenuPosition();
}
updateSelectionAndMenuPosition() {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    this.selectedRange = selection.getRangeAt(0);
    this.updateContextMenuPosition();
  }
}

updateContextMenuPosition() {
  if (!this.selectedRange) {
    return;
  }

  const rangeRect = this.selectedRange.getBoundingClientRect();
  this.contextMenuPosition.x = rangeRect.left + window.scrollX + (rangeRect.width / 2) - 100;
  this.contextMenuPosition.y = rangeRect.bottom + window.scrollY + 5;


}
  ngOnInit() {
    this.inputHeight = this.calcHeight();
    this.inputWidth = this.boxWidth - 4;
    this.ignoredElement.push(this.contextMenu);
    }

  calcHeight() {
    if (this.boxHeight > 100) {
      return this.boxHeight - 15;
    } else return this.boxHeight;

  }

  onTextSelect(event: Selection) {

    const selection = event;
    this.selectedText = selection?.toString().trim() || "";
    this.selectedRange = selection.getRangeAt(0);
    const rangeRect = this.selectedRange.getBoundingClientRect();
    this.contextMenuPosition.x = rangeRect.left + window.scrollX + (rangeRect.width / 2) - (200 / 2);
    this.contextMenuPosition.y = rangeRect.bottom + window.scrollY + 5;

    if (selection && selection.rangeCount > 0) {
      const anchorNode = selection.anchorNode;
      if (this.inputField.nativeElement.contains(anchorNode)) {


        this.currentLinkElement = null;
        this.currentLink = '';

        let parent = this.selectedRange.commonAncestorContainer;

        while (parent && parent.nodeName !== "#document") {
          if (parent.nodeName === "A") {
            this.currentLinkElement = parent as HTMLAnchorElement;
            this.currentLink = this.currentLinkElement.href;
            break;
          }
          parent = parent.parentNode;
        }


        this.isContextMenuVisible = this.selectedText !== "";
      } else {
        this.isContextMenuVisible = false;
      }
    }
  }
  ngAfterViewInit()
  {
    this.setupPasteListener();
  }
   setupPasteListener() {

    this.inputField.nativeElement.addEventListener('paste', (event: ClipboardEvent) => {
      event.preventDefault();
        this.isContextMenuVisible = false;
      const text = event.clipboardData?.getData('text/plain');
      if (text) {
        document.execCommand("insertText", false, text);
      }
    });
  }
 onBackspace()
  {
     this.isContextMenuVisible = false;
  }


  addLink(url: string) {
    if (this.currentLinkElement) {
      this.currentLinkElement.href = url;
      this.currentLinkElement.textContent = this.selectedText;

      this.characterService.spellData[this.spellLvl][this.SpellId].string=this.inputField.nativeElement.innerHTML;
    } else {
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank";
      link.className='link';
      link.textContent = this.selectedText;
      link.style.setProperty('text-decoration', 'none');
      link.style.setProperty('font-weight', 'bold');
      link.style.setProperty('color', '#1A01CC');
      this.selectedRange.deleteContents();
      this.selectedRange.insertNode(link);

      this.characterService.spellData[this.spellLvl][this.SpellId].string=this.inputField.nativeElement.innerHTML;

    }

    this.isContextMenuVisible = false;
  }

  close() {
    this.isContextMenuVisible = false;

  }
    off(event:any)
  {
    event.preventDefault();
  }
}
