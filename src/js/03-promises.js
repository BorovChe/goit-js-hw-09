import Notiflix from 'notiflix';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

const submitBtn = document.querySelector('[type="submit"]');

submitBtn.addEventListener('click', onMakeSubmit);
delayInput.addEventListener('input', onMakeInputDelay);
stepInput.addEventListener('input', onMakeInputStep);
amountInput.addEventListener('input', onMakeInputAmount);

let delays = 0;
function onMakeInputDelay(e) {
  delays = Number(e.currentTarget.value);
  return delays;
}

let step = 0;
function onMakeInputStep(e) {
  step = Number(e.currentTarget.value);
  return step;
}

let amount = 0;
function onMakeInputAmount(e) {
  amount = e.currentTarget.value;
  return amount;
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
     const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    res({ position, delay })
  } else {
    rej({ position, delay })
  }
    }, delays += step);
  })
}

function onMakeSubmit(e) {
  e.preventDefault();
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delays)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}

