import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterSheetComponent } from './charecter-sheet.component';

describe('CharecterSheetComponent', () => {
  let component: CharecterSheetComponent;
  let fixture: ComponentFixture<CharecterSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharecterSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharecterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
