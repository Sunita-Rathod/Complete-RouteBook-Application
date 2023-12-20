import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thumbnail1Component } from './thumbnail1.component';

describe('Thumbnail1Component', () => {
  let component: Thumbnail1Component;
  let fixture: ComponentFixture<Thumbnail1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Thumbnail1Component]
    });
    fixture = TestBed.createComponent(Thumbnail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
