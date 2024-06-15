import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingThrowsSkillsBarComponent } from './savingThrows-skills-bar.component';

describe('FunctionsComponent', () => {
  let component: SavingThrowsSkillsBarComponent;
  let fixture: ComponentFixture<SavingThrowsSkillsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingThrowsSkillsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingThrowsSkillsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
