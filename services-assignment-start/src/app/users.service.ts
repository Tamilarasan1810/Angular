import { Injectable } from '@angular/core';
import { TransactionCounterService } from './transaction-counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsers = ['Tamil', 'Selvan'];
  inactiveUsers = ['Arasan', 'Murugesan', 'Siva'];

  constructor(private transactionService: TransactionCounterService) {}

  setToActive(index: number) {
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
    this.transactionService.activeCounter();
  }
  setToInactive(index: number) {
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
    this.transactionService.inactiveCounter();
  }
}
