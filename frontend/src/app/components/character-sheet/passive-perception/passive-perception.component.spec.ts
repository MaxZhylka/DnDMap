import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivePerceptionComponent } from './passive-perception.component';

describe('PassivePerceptionComponent', () => {
  let component: PassivePerceptionComponent;
  let fixture: ComponentFixture<PassivePerceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassivePerceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassivePerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
