import Mole from './Mole';

const GAME_LENGTH = 30;

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
    this.timeRemaining = GAME_LENGTH;
    this.timeElement = params.timeRemaining;

    this.moles = Array.prototype.map.call(
      this.moleElements,
      (mole) =>
        new Mole({
          element: mole,
          handleClick: this.addWhack
        })
    );

    this.setupControlsListeners();
  }

  activateClock() {
    this.timeRemaining = GAME_LENGTH;

    this.timeInterval = setInterval(() => {
      this.timeRemaining -= 1;

      this.updateTime(this.timeRemaining);
    }, 1000);

    setTimeout(this.stopGame, GAME_LENGTH * 1000);
  }

  activateRandomMoles() {
    const secondsBetweenMoles = Math.ceil(Math.random() * 1) * (1000 / 2);

    this.moleInterval = setInterval(() => {
      const randomMoleIndex = Math.floor(Math.random() * this.moles.length);

      this.moles[randomMoleIndex].activate();
    }, secondsBetweenMoles);
  }

  addWhack = () => {
    this.score += 1;

    this.updateScore(this.score);
  };

  deactivateClock() {
    clearInterval(this.timeInterval);
    this.timeInterval = null;

    this.timeRemaining = GAME_LENGTH;
    this.updateTime(this.timeRemaining);
  }

  deactivateMoles() {
    clearInterval(this.moleInterval);
    this.moleInterval = null;

    this.moles.forEach((mole) => mole.deactivate());
  }

  setupControlsListeners() {
    this.controls.resetButton.addEventListener('click', () =>
      this.updateScore(0)
    );
    this.controls.startButton.addEventListener('click', this.startGame);
    this.controls.stopButton.addEventListener('click', this.stopGame);

    this.controls.stopButton.disabled = true;
  }

  startGame = () => {
    this.activateClock();
    this.activateRandomMoles();

    this.score = 0;
    this.updateScore(this.score);

    this.controls.startButton.disabled = true;
    this.controls.stopButton.disabled = false;
  };

  stopGame = () => {
    this.deactivateMoles();
    this.deactivateClock();

    this.controls.startButton.disabled = false;
    this.controls.stopButton.disabled = true;
  };

  updateScore(newScore) {
    this.scoreElement.textContent = newScore;
  }

  updateTime(timeRemaining) {
    this.timeElement.textContent = timeRemaining;
  }
}

export default GameController;
