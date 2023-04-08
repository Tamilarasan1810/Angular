import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private logService: LoggingService) {}

  addAccount(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    this.logService.logStatusChange(newAccount.status);
  }

  updateStatus(id: number, newstatus: string) {
    this.accounts[id].status = newstatus;
    this.logService.logStatusChange(newstatus);
  }
}
