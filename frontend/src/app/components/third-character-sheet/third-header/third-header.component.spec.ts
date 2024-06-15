import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdHeaderComponent } from './third-header.component';

describe('ThirdHeaderComponent', () => {
  let component: ThirdHeaderComponent;
  let fixture: ComponentFixture<ThirdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
