export class Review {
    reviewId: number;
    rating: number;
    userId: any; // You might want to replace 'any' with the actual User model if available
    routeId: any; // You might want to replace 'any' with the actual Route model if available
  
    constructor(reviewId: number, rating: number, user: any, route: any) {
      this.reviewId = reviewId;
      this.rating = rating;
      this.userId = user;
      this.routeId= route;
    }
}
