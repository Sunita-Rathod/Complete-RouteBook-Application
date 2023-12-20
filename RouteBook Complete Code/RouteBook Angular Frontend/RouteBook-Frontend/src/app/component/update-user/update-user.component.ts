import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userId!: number;
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('id');

    if (userIdParam !== null) {
      this.userId = +userIdParam;

      this.userService.getUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error: any) => {
          console.error('Error fetching user data:', error);
        }
      );
    } else {
      console.error('User ID parameter is null.');
    }
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(
      (updatedUser: User) => {
        console.log('User updated successfully:', updatedUser);
        this.router.navigate(['/list-user']);
      },
      (error: any) => {
        if (error.status === 400) {
          console.error('Client-side error:', error);
          // Display a user-friendly message to the user
        } else {
          console.error('Server-side error:', error);
          // Navigate to the list page or display an appropriate message
          this.router.navigate(['/list-user']);
        }
      }
    );
  }
  
}
