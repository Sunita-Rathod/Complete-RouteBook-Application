import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thumbnail3Component } from './thumbnail3.component';

describe('Thumbnail3Component', () => {
  let component: Thumbnail3Component;
  let fixture: ComponentFixture<Thumbnail3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Thumbnail3Component]
    });
    fixture = TestBed.createComponent(Thumbnail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
