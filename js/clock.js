const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2,"0");
  const mins = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");
  clock.innerText=`${hours}:${mins}:${sec} (${year}년 ${month+1}월 ${day}일)`;
} 
getClock();
setInterval(getClock, 1000);