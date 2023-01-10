import '../css/common.css';

const refs = {
    bodyEl: document.querySelector('body'),
    startEl: document.querySelector('button[data-start]'),
    stopEl: document.querySelector('button[data-stop]'),
}

let intervalID = null;

const randomBodyColorGenerator = {
  DELAY: 1000,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgColorRandom();
    }, this.DELAY);
  },

  start() {
    refs.startEl.addEventListener('click', () => {
      this.interval();
      refs.startEl.disabled = true;
      refs.stopEl.disabled = false;
    });
    refs.stopEl.addEventListener('click', this.stop);
  },

  stop() {
    clearInterval(intervalID);
    refs.stopEl.disabled = true;
    refs.startEl.disabled = false;
  },
};

function changeBgColorRandom() {
  refs.bodyEl.style.backgroundColor = `${randomBodyColorGenerator.getRandomHexColor()}`;
}

randomBodyColorGenerator.start();