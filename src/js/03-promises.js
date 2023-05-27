import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', onMakeSubmit);

function onMakeSubmit(e) {
  e.preventDefault();
  const objForm = {
    delay: Number(delayInput.value),
    step: Number(stepInput.value),
    amount: Number(amountInput.value),
  };

  for (let i = 1; i <= objForm.amount; i += 1) {
    createPromise(i, objForm.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    objForm.delay += objForm.step;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
