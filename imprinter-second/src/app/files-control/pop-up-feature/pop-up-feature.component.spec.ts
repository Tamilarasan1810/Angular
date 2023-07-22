import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFeatureComponent } from './pop-up-feature.component';

describe('PopUpFeatureComponent', () => {
  let component: PopUpFeatureComponent;
  let fixture: ComponentFixture<PopUpFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
