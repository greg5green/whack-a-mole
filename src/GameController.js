import Mole from './Mole';

const GAME_LENGTH = 10;

class GameController {
  constructor(params) {
    this.controls = {
      resetButton: params.resetButton,
      startButton: params.startButton,
      stopButton: params.stopButton
    };
    this.moleElements = params.moles;
    this.score = 0;
    this.scoreElement = params.scoreBoard;
    this.timeRemaining = 0;
    this.timeElement = params.timeRemaining;

    this.moles = Array.prototype.map.call(
      this.moleElements,
      (mole) =>
        new Mole({
          element: mole,
          onClick: this.addWhack
        })
    );
    this.setupControlsListeners();
  }

  addWhack = () => {
    this.score += 1;

    this.updateScore(this.score);
  };

  setupControlsListeners() {
    this.controls.resetButton.addEventListener('click', () =>
      this.updateScore(0)
    );
    this.controls.startButton.addEventListener('click', this.startGame);
    this.controls.stopButton.addEventListener('click', this.stopGame);
  }

  startGame = () => {
    this.moles.forEach((mole) => mole.addListener());

    this.timeRemaining = GAME_LENGTH;

    this.gameInterval = setInterval(() => {
      this.timeRemaining -= 1;

      this.updateTime(this.timeRemaining);
    }, 1000);

    setTimeout(this.stopGame, GAME_LENGTH * 1000);
  };

  stopGame = () => {
    clearInterval(this.gameInterval);
    this.moles.forEach((mole) => mole.removeListener());
  };

  updateScore(newScore) {
    this.scoreElement.textContent = newScore;
  }

  updateTime(timeRemaining) {
    this.timeElement.textContent = timeRemaining;
  }
}

export default GameController;
