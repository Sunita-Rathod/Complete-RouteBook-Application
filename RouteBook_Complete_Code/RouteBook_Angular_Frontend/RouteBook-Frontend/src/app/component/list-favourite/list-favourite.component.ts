import { Component, OnInit } from '@angular/core';
import { Favourite } from 'src/app/model/favourite';
import { FavouriteService } from 'src/app/service/favourite.service';

@Component({
  selector: 'app-list-favourite',
  templateUrl: './list-favourite.component.html',
  styleUrls: ['./list-favourite.component.css']
})
export class ListFavouriteComponent implements OnInit {
  favourites: Favourite[] = [];

  constructor(private favouriteService: FavouriteService) {}

  ngOnInit(): void {
    this.loadFavourites();
  }

  loadFavourites(): void {
    this.favouriteService.getAllFavourites().subscribe(
      (favourites: Favourite[]) => {
        this.favourites = favourites;
      },
      (error: any) => {
        console.error('Error fetching favourites:', error);
      }
    );
  }
}
