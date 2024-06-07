import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSureComponent } from './are-you-sure.component';

describe('AreYouSureComponent', () => {
  let component: AreYouSureComponent;
  let fixture: ComponentFixture<AreYouSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreYouSureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreYouSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
