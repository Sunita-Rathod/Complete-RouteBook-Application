import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit{

  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getAllReviews().subscribe(
      (reviews: Review[]) => {
        this.reviews = reviews;
      },
      (error: any) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }
}
