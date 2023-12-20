import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thumbnail4Component } from './thumbnail4.component';

describe('Thumbnail4Component', () => {
  let component: Thumbnail4Component;
  let fixture: ComponentFixture<Thumbnail4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Thumbnail4Component]
    });
    fixture = TestBed.createComponent(Thumbnail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
