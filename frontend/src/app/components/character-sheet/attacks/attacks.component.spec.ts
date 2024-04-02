import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksComponent } from './attacks.component';

describe('AttacksComponent', () => {
  let component: AttacksComponent;
  let fixture: ComponentFixture<AttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
