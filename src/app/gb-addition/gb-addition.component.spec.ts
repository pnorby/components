import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbAdditionComponent } from './gb-addition.component';

describe('GbAdditionComponent', () => {
  let component: GbAdditionComponent;
  let fixture: ComponentFixture<GbAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
