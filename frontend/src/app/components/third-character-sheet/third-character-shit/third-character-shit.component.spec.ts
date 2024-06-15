import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCharacterShitComponent } from './third-character-shit.component';

describe('ThirdCharacterShitComponent', () => {
  let component: ThirdCharacterShitComponent;
  let fixture: ComponentFixture<ThirdCharacterShitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdCharacterShitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdCharacterShitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
