import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesAndTreasureComponent } from './allies-and-treasure.component';

describe('AlliesAndTreasureComponent', () => {
  let component: AlliesAndTreasureComponent;
  let fixture: ComponentFixture<AlliesAndTreasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlliesAndTreasureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlliesAndTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
