import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  constructor(private logService: LoggingService) {}
  onCreatedAccount(accountName: string, status: string) {
    this.accountAdded.emit({ name: accountName, status: status });
    this.logService.logStatusChange(status);
    // console.log('A server status Changed, new Status: ', status);
  }
}
