import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTraitsComponent } from './personal-traits.component';

describe('PersonalTraitsComponent', () => {
  let component: PersonalTraitsComponent;
  let fixture: ComponentFixture<PersonalTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalTraitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
