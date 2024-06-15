import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxTripleComponent } from './check-box-triple.component';

describe('CheckBoxTripleComponent', () => {
  let component: CheckBoxTripleComponent;
  let fixture: ComponentFixture<CheckBoxTripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxTripleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckBoxTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
