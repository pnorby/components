import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvSlackNTellComponent } from './jv-slack-n-tell.component';

describe('JvSlackNTellComponent', () => {
  let component: JvSlackNTellComponent;
  let fixture: ComponentFixture<JvSlackNTellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JvSlackNTellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JvSlackNTellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
