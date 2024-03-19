import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingthrowBarComponent } from './savingthrow-bar.component';

describe('SavingthrowBarComponent', () => {
  let component: SavingthrowBarComponent;
  let fixture: ComponentFixture<SavingthrowBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingthrowBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingthrowBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
