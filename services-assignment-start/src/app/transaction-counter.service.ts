import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionCounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() {}

  activeCounter() {
    this.inactiveToActiveCounter++;
    console.log('Active Counter: ' + this.inactiveToActiveCounter);
  }
  inactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('Inactive Counter: ' + this.activeToInactiveCounter);
  }
}
