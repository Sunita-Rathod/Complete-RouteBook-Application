import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavouriteComponent } from './list-favourite.component';

describe('ListFavouriteComponent', () => {
  let component: ListFavouriteComponent;
  let fixture: ComponentFixture<ListFavouriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFavouriteComponent]
    });
    fixture = TestBed.createComponent(ListFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
