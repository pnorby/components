import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnComponentColorComponent } from './pn-component-color.component';

describe('PnComponentColorComponent', () => {
  let component: PnComponentColorComponent;
  let fixture: ComponentFixture<PnComponentColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnComponentColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnComponentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
