import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
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
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { UserNavbarComponent } from './component/user-navbar/user-navbar.component';
import { DeleteRouteComponent } from './component/delete-route/delete-route.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path:'user-navbar', component:UserNavbarComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path:'thumbnail1', component:Thumbnail1Component},
  {path:'thumbnail2', component:Thumbnail2Component},
  {path:'thumbnail3', component:Thumbnail3Component},
  {path:'thumbnail4', component:Thumbnail4Component},
  {path:'blog',component:BlogComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'review',component:ReviewsComponent},
  {path:'footer', component:FooterComponent},
  {path:'list-user',component:ListUserComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'delete-user/:id',component:DeleteUserComponent},
{path:'list-reviews' ,component:ListReviewComponent},
{path:'list-favourites' ,component:ListFavouriteComponent},
{path:'list-routes' ,component:ListRouteComponent},
{path:'' , component:HomeComponent} ,
{path:'about-us', component:AboutUsComponent} ,
  { path: 'delete-route/:routeId', component: DeleteRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }