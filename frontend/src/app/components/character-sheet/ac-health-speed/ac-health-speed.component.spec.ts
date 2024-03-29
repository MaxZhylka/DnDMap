import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcHealthSpeedComponent } from './ac-health-speed.component';

describe('AcHealthSpeedComponent', () => {
  let component: AcHealthSpeedComponent;
  let fixture: ComponentFixture<AcHealthSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcHealthSpeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcHealthSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
