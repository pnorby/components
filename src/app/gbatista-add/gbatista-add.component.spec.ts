import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbatistaAddComponent } from './gbatista-add.component';

describe('GbatistaAddComponent', () => {
  let component: GbatistaAddComponent;
  let fixture: ComponentFixture<GbatistaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbatistaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbatistaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
