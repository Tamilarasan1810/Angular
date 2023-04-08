import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input()
  id!: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(private accountsService: AccountsService) {}

  onSetTo(updatedStatus: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: updatedStatus });
    this.accountsService.updateStatus(this.id, updatedStatus);
    // console.log('A server status changed, new status: ' + updatedStatus);
    // this.logService.logStatusChange(updatedStatus);
  }
}
