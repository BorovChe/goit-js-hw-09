function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const objRef = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

objRef.btnStart.addEventListener('click', onMakeStart);
objRef.btnStop.addEventListener('click', onMakeStop);
onDisabledBtn(objRef.btnStop);

let idIntetval;
function generationColor() {
  idIntetval = setInterval(() => {
    objRef.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function onMakeStart() {
  generationColor();
  onDisabledBtn(objRef.btnStart);
  onEnabledBtn(objRef.btnStop);
}

function onMakeStop() {
  clearInterval(idIntetval);
  onEnabledBtn(objRef.btnStart);
  onDisabledBtn(objRef.btnStop);
}

function onDisabledBtn(btn) {
  btn.setAttribute('disabled', 'disabled-btn');
}

function onEnabledBtn(btn) {
  btn.removeAttribute('disabled');
}
