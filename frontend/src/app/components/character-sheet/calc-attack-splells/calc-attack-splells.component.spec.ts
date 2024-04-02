import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAttackSplellsComponent } from './calc-attack-splells.component';

describe('CalcAttackSplellsComponent', () => {
  let component: CalcAttackSplellsComponent;
  let fixture: ComponentFixture<CalcAttackSplellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcAttackSplellsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcAttackSplellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
