import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  constructor(private usersService: UsersService) {}

  inactiveUsers = this.usersService.inactiveUsers;
  setToActive(index: number) {
    this.usersService.setToActive(index);
  }
}
