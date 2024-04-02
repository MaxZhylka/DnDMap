import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackSpellsComponent } from './attack-spells.component';

describe('AttackSpellsComponent', () => {
  let component: AttackSpellsComponent;
  let fixture: ComponentFixture<AttackSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackSpellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
