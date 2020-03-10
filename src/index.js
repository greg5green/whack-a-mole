import GameController from './GameController';
import Mole from './Mole';
import './styles/index.css';

const game = new GameController({
  moles: document.querySelectorAll('.mole'),
  resetButton: document.querySelector('.controls__reset'),
  scoreBoard: document.querySelector('.scoreboard__score'),
  startButton: document.querySelector('.controls__start'),
  stopButton: document.querySelector('.controls__stop'),
  timeRemaining: document.querySelector('.scoreboard__time')
});
