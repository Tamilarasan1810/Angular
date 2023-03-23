import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Tamilarasan';
  username = '';
  showSecret = false;
  logs = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
