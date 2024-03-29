import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableComponent } from './printable.component';

describe('PrintableComponent', () => {
  let component: PrintableComponent;
  let fixture: ComponentFixture<PrintableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
