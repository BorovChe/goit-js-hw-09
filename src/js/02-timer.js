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
        const timerInterval = setInterval(() => {
          
          const data = new Date();
          let miliSec = selectedDates[0].getTime() - data.getTime();
          const convertFunc = addLeadingZero(miliSec);

          dayEl.textContent = convertFunc.leadingDays;
          hourEl.textContent = convertFunc.leadingHours;
          minuteEl.textContent = convertFunc.leadingMin;
          secondEl.textContent = convertFunc.leadingSeconds;

          if (secondEl.textContent === '00') {
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
  const convert = convertMs(value);
  const convertDays = `${convert.days}`;
  const convertHours = `${convert.hours}`;
  const convertMin = `${convert.minutes}`;
  const convertSeconds = `${convert.seconds}`;

  const leadingDays = convertDays.padStart(2, '0');
  const leadingHours = convertHours.padStart(2, '0');
  const leadingMin = convertMin.padStart(2, '0');
  const leadingSeconds = convertSeconds.padStart(2, '0');

  return { leadingDays, leadingHours, leadingMin, leadingSeconds };
}
