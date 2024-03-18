import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTraitsBarComponent } from './personal-traits-bar.component';

describe('PersonalTraitsBarComponent', () => {
  let component: PersonalTraitsBarComponent;
  let fixture: ComponentFixture<PersonalTraitsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalTraitsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalTraitsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
