import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css'],
})
export class GameControllerComponent {
  gameValue = 0;

  @Output() gameStart = new EventEmitter<{ gameValue: number }>();
  @Output() gameEnd = new EventEmitter<{}>();

  interval: any;
  play() {
    this.interval = setInterval(() => {
      this.gameValue += 1;
      this.gameStart.emit({
        gameValue: this.gameValue,
      });
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  onStartGame(stop: any) {
    this.play();
  }
  onStopGame(stop: any) {
    this.pause();
    this.gameEnd.emit();
  }
}
