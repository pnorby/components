import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrAdditionComponent } from './jr-addition.component';

describe('JrAdditionComponent', () => {
  let component: JrAdditionComponent;
  let fixture: ComponentFixture<JrAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JrAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JrAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
