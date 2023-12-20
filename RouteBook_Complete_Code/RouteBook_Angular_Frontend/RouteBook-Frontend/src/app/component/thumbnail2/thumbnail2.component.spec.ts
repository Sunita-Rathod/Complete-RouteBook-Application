import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thumbnail2Component } from './thumbnail2.component';

describe('Thumbnail2Component', () => {
  let component: Thumbnail2Component;
  let fixture: ComponentFixture<Thumbnail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Thumbnail2Component]
    });
    fixture = TestBed.createComponent(Thumbnail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
