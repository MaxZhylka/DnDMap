import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCharacterSheetComponent } from './second-character-sheet.component';

describe('SecondCharacterSheetComponent', () => {
  let component: SecondCharacterSheetComponent;
  let fixture: ComponentFixture<SecondCharacterSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCharacterSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondCharacterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
