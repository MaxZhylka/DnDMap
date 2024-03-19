import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingthrowComponent } from './savingthrow.component';

describe('SavingthrowComponent', () => {
  let component: SavingthrowComponent;
  let fixture: ComponentFixture<SavingthrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingthrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingthrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
