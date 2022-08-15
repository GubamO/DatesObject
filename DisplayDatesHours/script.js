let date = new Date();


// let weekDay = date.getUTCDay;
// console.log(weekDay);

const weekDay = document.getElementById('WeekDay');
const monthDay = document.getElementById('MonthDay');
const month = document.getElementById('Month');
const year = document.getElementById('Year');

const hours = document.getElementById('Hours');
const minutes = document.getElementById('Minutes');
const seconds = document.getElementById('Seconds');

const days = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
];
const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
];

weekDay.innerText = days[date.getDay()];
monthDay.innerHTML = date.getDate();
month.innerText = months[date.getMonth()];
year.innerText = date.getFullYear();

hours.innerText = date.getHours();
minutes.innerHTML = date.getMinutes();
seconds.innerHTML = date.getSeconds();







