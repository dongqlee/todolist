let clock = document.querySelector("#clock");

const boxMonth = document.getElementById('box_month');
const boxDate = document.getElementById('box_date');
const boxYear = document.getElementById('box_year');
const boxDay = document.getElementById('box_day');

let nowDate = new Date();

let year = nowDate.getFullYear();
let month = String(nowDate.getMonth() + 1).padStart(2, '0');
let weekDay = ['일', '월', '화', '수', '목', '금', '토']
let day = weekDay[nowDate.getDay()];
let dateNow = String(nowDate.getDate()).padStart(2, '0');

boxMonth.innerText = `${month}월`;
boxDate.innerText = `${dateNow}일`;
boxYear.innerText = `${year}년`;
boxDay.innerText = `${day}요일`;

function timeSet() {
  let hours = String(nowDate.getHours()).padStart(2, "0");
  let mins = String(nowDate.getMinutes()).padStart(2, "0");
  let sec = String(nowDate.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${mins}:${sec}`;
} 
timeSet();
setInterval(timeSet, 1000);