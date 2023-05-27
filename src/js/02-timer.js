import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const dayEl = document.querySelector('[data-days]');
const hourEl = document.querySelector('[data-hours]');
const minuteEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds]');

const btnStart = document.querySelector('[data-start]');
onDisabledBtn();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() >= options.defaultDate.getTime()) {
      onEnabledBtn();

      btnStart.addEventListener('click', () => {
        timerInterval = setInterval(() => {
          const data = new Date();
          let milliseconds = selectedDates[0].getTime() - data.getTime();
          const convertFunc = convertMs(milliseconds);

          dayEl.textContent = `${addLeadingZero(convertFunc.days)}`;
          hourEl.textContent = `${addLeadingZero(convertFunc.hours)}`;
          minuteEl.textContent = `${addLeadingZero(convertFunc.minutes)}`;
          secondEl.textContent = `${addLeadingZero(convertFunc.seconds)}`;

          if (
            dayEl.textContent === '00' &&
            hourEl.textContent === '00' &&
            minuteEl.textContent === '00' &&
            secondEl.textContent === '00'
          ) {
            clearInterval(timerInterval);
          }
        }, 1000);
      });
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      onDisabledBtn();
    }
  },
};

flatpickr('#datetime-picker', options);

function onDisabledBtn() {
  btnStart.setAttribute('disabled', 'disabled-btn');
}

function onEnabledBtn() {
  btnStart.removeAttribute('disabled');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
