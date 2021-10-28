import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtikuColorGameComponent } from './jtiku-color-game.component';

describe('JtikuColorGameComponent', () => {
  let component: JtikuColorGameComponent;
  let fixture: ComponentFixture<JtikuColorGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JtikuColorGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JtikuColorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
