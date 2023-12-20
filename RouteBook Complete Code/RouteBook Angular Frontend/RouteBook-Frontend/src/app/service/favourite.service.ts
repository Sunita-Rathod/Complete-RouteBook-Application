import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favourite } from '../model/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private apiUrl = 'http://localhost:8080/favourites';

  constructor(private http: HttpClient) {}

  getAllFavourites(): Observable<Favourite[]> {
    return this.http.get<Favourite[]>(`${this.apiUrl}/all`);
  }

  getFavouriteById(favId: number): Observable<Favourite> {
    return this.http.get<Favourite>(`${this.apiUrl}/getbyid/${favId}`);
  }

  createFavourite(favourite: Favourite): Observable<Favourite> {
    return this.http.post<Favourite>(`${this.apiUrl}/create`, favourite);
  }

  updateFavourite(favId: number, updatedFavourite: Favourite): Observable<Favourite> {
    return this.http.put<Favourite>(`${this.apiUrl}/update/${favId}`, updatedFavourite);
  }

  deleteFavourite(favId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${favId}`);
  }
}
