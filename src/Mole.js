const VISIBLE_CLASS = 'visible';

class Mole {
  constructor({ element, handleClick }) {
    this.element = element;
    this.handleClick = handleClick;
  }

  activate() {
    if (!this.timeout) {
      this.element.addEventListener('click', this.onClick);

      this.showMoleForRandomTime();
    }
  }

  deactivate(shouldClearTimeout) {
    if (this.timeout) {
      this.element.removeEventListener('click', this.onClick);

      if (shouldClearTimeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = null;

      this.element.classList.remove(VISIBLE_CLASS);
    }
  }

  onClick = () => {
    this.deactivate();
    this.handleClick();
  };

  showMoleForRandomTime() {
    const secondsToBeShown = Math.ceil(Math.random() * 4) * 1000;

    this.element.classList.add(VISIBLE_CLASS);

    this.timeout = setTimeout(() => {
      this.deactivate();
    }, secondsToBeShown);
  }
}

export default Mole;
