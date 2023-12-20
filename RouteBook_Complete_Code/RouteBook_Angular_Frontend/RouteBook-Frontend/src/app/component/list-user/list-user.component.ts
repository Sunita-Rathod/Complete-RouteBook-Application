import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  users: User[] = [];

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users data:', error);
      }
    );
  }

  navigateToUpdatePage(userId: number) {
    // Navigate to the update user page with the user's ID
    this.router.navigate(['/update-user', userId]);
  }
  
  confirmDelete(userId: number): void {
    this.router.navigate(['/delete-user', userId]);
  }
}
