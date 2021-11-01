import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbSelectComponent } from './mtb-select.component';

describe('MtbSelectComponent', () => {
  let component: MtbSelectComponent;
  let fixture: ComponentFixture<MtbSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtbSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
