import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRouteComponent } from './list-route.component';

describe('ListRouteComponent', () => {
  let component: ListRouteComponent;
  let fixture: ComponentFixture<ListRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRouteComponent]
    });
    fixture = TestBed.createComponent(ListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
