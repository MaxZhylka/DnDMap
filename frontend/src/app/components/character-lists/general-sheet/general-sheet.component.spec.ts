import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSheetComponent } from './general-sheet.component';

describe('GeneralSheetComponent', () => {
  let component: GeneralSheetComponent;
  let fixture: ComponentFixture<GeneralSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
