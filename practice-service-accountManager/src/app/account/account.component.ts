import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  constructor(private accountsService: AccountsService) {}

  @Input()
  account!: { name: string; status: string };
  @Input()
  id!: number;

  onSetTo(newStatus: string) {
    this.accountsService.updateAccount(this.id, newStatus);
    this.accountsService.statusUpdated.emit(newStatus);
  }
}
