import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBarComponent } from './skill-bar.component';

describe('SkillBarComponent', () => {
  let component: SkillBarComponent;
  let fixture: ComponentFixture<SkillBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
