import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendNewsComponent } from './opend-news.component';

describe('OpendNewsComponent', () => {
  let component: OpendNewsComponent;
  let fixture: ComponentFixture<OpendNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpendNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpendNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
