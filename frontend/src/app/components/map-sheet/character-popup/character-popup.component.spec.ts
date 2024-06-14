import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPopupComponent } from './character-popup.component';

describe('CharacterPopupComponent', () => {
  let component: CharacterPopupComponent;
  let fixture: ComponentFixture<CharacterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
