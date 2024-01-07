import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from 'src/app/service/route.service';

@Component({
  selector: 'app-delete-route',
  template: `
    <h2>Delete Route</h2>
    <p>Are you sure you want to delete this route?</p>
    <button (click)="deleteRoute()" class="btn btn-danger">Delete</button>
    <button (click)="cancel()" class="btn btn-primary">Cancel</button>
  `,
  styles: [],
})
export class DeleteRouteComponent implements OnInit {
  routeId!: number;


  constructor(private routeService: RouteService, private routeActivated: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routeId = this.routeActivated.snapshot.params['routeId'];
  }

  deleteRoute() {
    this.routeService.deleteRoute(this.routeId).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/routes']);
    });
  }

  cancel() {
    this.router.navigate(['/routes']);
  }
}
