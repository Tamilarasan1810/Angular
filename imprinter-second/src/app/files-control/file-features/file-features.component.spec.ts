import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFeaturesComponent } from './file-features.component';

describe('FileFeaturesComponent', () => {
  let component: FileFeaturesComponent;
  let fixture: ComponentFixture<FileFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
