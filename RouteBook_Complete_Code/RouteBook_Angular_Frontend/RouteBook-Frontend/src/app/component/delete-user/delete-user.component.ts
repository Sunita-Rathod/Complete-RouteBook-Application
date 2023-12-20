import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  deleteUser(): void {
    this.userService.deleteUser(this.userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.router.navigate(['/list-user']);
      },
      (error: any) => {
        console.error('Error deleting user:', error);
        this.router.navigate(['/list-user']);
      }
    );
  }

}
