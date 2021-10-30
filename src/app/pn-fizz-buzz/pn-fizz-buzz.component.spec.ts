import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnFizzBuzzComponent } from './pn-fizz-buzz.component';

describe('PnFizzBuzzComponent', () => {
  let component: PnFizzBuzzComponent;
  let fixture: ComponentFixture<PnFizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnFizzBuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnFizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
