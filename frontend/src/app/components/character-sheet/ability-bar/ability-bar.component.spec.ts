import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityBarComponent } from './ability-bar.component';

describe('AbilityBarComponent', () => {
  let component: AbilityBarComponent;
  let fixture: ComponentFixture<AbilityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilityBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
