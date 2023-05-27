function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
onDisabledBtnStop();

btnStart.addEventListener('click', onMakeStart);
btnStop.addEventListener('click', onMakeStop);

function onMakeStart() {
  idIntetval = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  onDisabledBtnStart();
  onEnabledBtnStop();
}

function onMakeStop() {
  clearInterval(idIntetval);
  onEnabledBtnStart();
  onDisabledBtnStop();
}

function onDisabledBtnStop() {
  btnStop.setAttribute('disabled', 'disabled-btn');
}

function onEnabledBtnStop() {
  btnStop.removeAttribute('disabled');
}

function onDisabledBtnStart() {
  btnStart.setAttribute('disabled', 'disabled-btn');
}

function onEnabledBtnStart() {
  btnStart.removeAttribute('disabled');
}
