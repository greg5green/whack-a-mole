class Mole {
  constructor({ element, onClick }) {
    this.element = element;
    this.onClick = onClick;
  }

  addListener() {
    this.element.addEventListener('click', this.onClick);
  }

  removeListener() {
    this.element.removeEventListener('click', this.onClick);
  }
}

export default Mole;
