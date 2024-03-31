import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryHitsComponent } from './temporary-hits.component';

describe('TemporaryHitsComponent', () => {
  let component: TemporaryHitsComponent;
  let fixture: ComponentFixture<TemporaryHitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporaryHitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemporaryHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
