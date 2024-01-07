import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { RouteService } from 'src/app/service/route.service';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css'],
})
export class ListRouteComponent implements OnInit {
  routes: Route[]|any;

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes() {
    this.routeService.getAllRoutes().subscribe((data) => {
      this.routes = data;
    });
  }

  deleteRoute(routeId: number) {
    this.routeService.deleteRoute(routeId).subscribe((response) => {
      console.log(response);
      this.loadRoutes();
    });
  }
}
