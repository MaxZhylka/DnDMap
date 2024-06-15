import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedComponent } from './speed.component';

describe('SpeedComponent', () => {
  let component: SpeedComponent;
  let fixture: ComponentFixture<SpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
