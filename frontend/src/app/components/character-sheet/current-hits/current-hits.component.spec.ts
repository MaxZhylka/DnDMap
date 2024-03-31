import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHitsComponent } from './current-hits.component';

describe('CurrentHitsComponent', () => {
  let component: CurrentHitsComponent;
  let fixture: ComponentFixture<CurrentHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentHitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
