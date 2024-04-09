import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsByLevelComponent } from './spells-by-level.component';

describe('SpellsByLevelComponent', () => {
  let component: SpellsByLevelComponent;
  let fixture: ComponentFixture<SpellsByLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsByLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpellsByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
