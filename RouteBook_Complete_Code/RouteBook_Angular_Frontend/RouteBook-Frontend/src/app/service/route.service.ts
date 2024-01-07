import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private baseUrl = 'http://localhost:8080/routes'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getAllRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(`${this.baseUrl}/all`);
  }

  getRouteById(routeId: number): Observable<Route> {
    return this.http.get<Route>(`${this.baseUrl}/getbyid/${routeId}`);
  }

  createRoute(route: Route): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/create`, route);
  }

  updateRoute(routeId: number, updatedRoute: Route): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/update/${routeId}`, updatedRoute);
  }

  deleteRoute(routeId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${routeId}`);
  }
}
