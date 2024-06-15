import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitisElLiComponent } from './citis-el-li.component';

describe('CitisElLiComponent', () => {
  let component: CitisElLiComponent;
  let fixture: ComponentFixture<CitisElLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitisElLiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitisElLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
