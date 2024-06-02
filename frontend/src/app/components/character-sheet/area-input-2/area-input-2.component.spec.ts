import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInput2Component } from './area-input-2.component';

describe('AreaInput2Component', () => {
  let component: AreaInput2Component;
  let fixture: ComponentFixture<AreaInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaInput2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
