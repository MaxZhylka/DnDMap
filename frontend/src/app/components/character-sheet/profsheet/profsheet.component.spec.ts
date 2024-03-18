import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfsheetComponent } from './profsheet.component';

describe('ProfsheetComponent', () => {
  let component: ProfsheetComponent;
  let fixture: ComponentFixture<ProfsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
