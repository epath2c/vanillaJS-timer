const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveawayTime = document.querySelector('.giveaway');
const clocks = document.querySelectorAll('.deadline-format h4');
const clockContainer = document.querySelector('.deadline');

const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(2025, 10, 25, 08, 00, 0);
const deadlineYear = futureDate.getFullYear();
const deadlineMonth = futureDate.getMonth();
const deadlineDay = futureDate.getDay();
const weekday = weekdays[deadlineDay];
const month = months[deadlineMonth];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveawayTime.textContent = `Giveaway Ends On ${weekday}, ${deadlineYear} ${month} ${deadlineDay} ${hours}: ${minutes} am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  function format(num) {
    if (num < 10) {
      return (num = `0${num}`);
    } else {
      return num;
    }
  }
  clocks.forEach(function (clock, index) {
    clock.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(count);
    clockContainer.innerHTML = `<h4 class="expired">Sorry, this giveaway has exired.</h4>`;
  }
}

let count = setInterval(getRemainingTime, 1000);

getRemainingTime();

//setInterval need two parameters, one if the callback function,
//one is how often we will call this callback function.
//Use setInterval can make the seconds countdown!
//Make sure define count before we call getRemainningTime, or we will have no access to the function count()
