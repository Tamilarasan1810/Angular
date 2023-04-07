import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  newServerName = 'Test Name';
  newServerContent = 'Hey, there';

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent,
    });
  }
}
