import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-area-input',
  templateUrl: './area-input.component.html',
  styleUrls: ['./area-input.component.css']
})
export class AreaInputComponent implements OnInit {
  @Input() personalId: string = '';
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


  addLink(url: string) {
    if (this.currentLinkElement) {
      this.currentLinkElement.href = url;
      this.currentLinkElement.textContent = this.selectedText;
    } else {
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank";
      link.textContent = this.selectedText;

      this.selectedRange.deleteContents();
      this.selectedRange.insertNode(link);

    }

    this.isContextMenuVisible = false;
  }

  close() {
    this.isContextMenuVisible = false;

  }
}
