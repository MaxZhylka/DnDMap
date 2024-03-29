import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorComponent } from './armor.component';

describe('ArmorComponent', () => {
  let component: ArmorComponent;
  let fixture: ComponentFixture<ArmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
