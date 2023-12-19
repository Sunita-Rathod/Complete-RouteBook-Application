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
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { ReviewsComponent } from './component/reviews/reviews.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path:'thumbnail1', component:Thumbnail1Component},
  {path:'thumbnail2', component:Thumbnail2Component},
  {path:'thumbnail3', component:Thumbnail3Component},
  {path:'thumbnail4', component:Thumbnail4Component},
  {path:'blog',component:BlogComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'review',component:ReviewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }