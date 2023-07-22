import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'Vue', 'React'];

  userModel = new User('Rob', 'rob@gmail.com', '', 'morning');

  onSubmit() {
    console.log(this.userModel);
  }
}
