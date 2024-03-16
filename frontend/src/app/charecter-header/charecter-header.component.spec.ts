import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterHeaderComponent } from './charecter-header.component';

describe('CharecterHeaderComponent', () => {
  let component: CharecterHeaderComponent;
  let fixture: ComponentFixture<CharecterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharecterHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharecterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
