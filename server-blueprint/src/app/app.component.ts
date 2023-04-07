import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test server', content: 'Test content' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'server',
    });
  }
  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
      type: 'blueprint',
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed!!!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
