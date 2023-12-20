import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Thumbnail1Component } from './component/thumbnail1/thumbnail1.component';
import { Thumbnail2Component } from './component/thumbnail2/thumbnail2.component';
import { Thumbnail3Component } from './component/thumbnail3/thumbnail3.component';
import { Thumbnail4Component } from './component/thumbnail4/thumbnail4.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';
import { ListReviewComponent } from './component/list-review/list-review.component';
import { ListFavouriteComponent } from './component/list-favourite/list-favourite.component';
import { ListRouteComponent } from './component/list-route/list-route.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    Thumbnail1Component,
    Thumbnail2Component,
    Thumbnail3Component,
    Thumbnail4Component,
    BlogComponent,
    ContactUsComponent,
    ReviewsComponent,
    FooterComponent,
    ListUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ListReviewComponent,
    ListFavouriteComponent,
    ListRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
