import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-controller';
  gameValues = [{ gameval: 0 }];
  onGameStart(gameData: { gameValue: number }) {
    this.gameValues.push({
      gameval: gameData.gameValue,
    });
  }
  onGameEnd() {}
}
