import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../model/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/reviews'; // Update with your backend API URL

  constructor(private httpClient: HttpClient) {}

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.apiUrl}/all`);
  }

  getReviewById(reviewId: number): Observable<Review> {
    return this.httpClient.get<Review>(`${this.apiUrl}/getreview/${reviewId}`);
  }

  createReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(`${this.apiUrl}/create`, review);
  }

  updateReview(reviewId: number, updatedReview: Review): Observable<Review> {
    return this.httpClient.put<Review>(`${this.apiUrl}/update/${reviewId}`, updatedReview);
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${reviewId}`);
  }
}
