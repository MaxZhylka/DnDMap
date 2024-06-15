import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCropperComponent } from './profile-cropper.component';

describe('ProfileCropperComponent', () => {
  let component: ProfileCropperComponent;
  let fixture: ComponentFixture<ProfileCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCropperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
