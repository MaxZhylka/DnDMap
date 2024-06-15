import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxCircleComponent } from './check-box-circle.component';

describe('CheckBoxCircleComponent', () => {
  let component: CheckBoxCircleComponent;
  let fixture: ComponentFixture<CheckBoxCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckBoxCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
