export class Route {
  routeId: number;
  source: string;
  destination: string;
  description: string;
  user: any; // Assuming User is another model

  constructor() {
    this.routeId = 0; // Initialize with a default value, change it based on your requirements
    this.source = '';
    this.destination = '';
    this.description = '';
    this.user = null; // or initialize with appropriate default value
  }
}
