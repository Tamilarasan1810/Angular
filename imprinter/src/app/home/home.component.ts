import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  go_to_printable(route: any): void {
    const navigationExtras: NavigationExtras = {
      skipLocationChange: true,
    };
    console.log(route);
    this.router.navigate(['/printable'], navigationExtras);
  }
}
