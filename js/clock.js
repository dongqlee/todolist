const clock = document.querySelector("#clock");
const boxDate = document.getElementById('box_date');

function getDate() {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = String(nowDate.getMonth() + 1).padStart(2, '0');
  let weekDay = ['일', '월', '화', '수', '목', '금', '토']
  const day = weekDay[nowDate.getDay()];
  const dateNow = String(nowDate.getDate()).padStart(2, '0');

  boxDate.innerText = `${year}년 ${month}월 ${dateNow}일 ${day}요일`;
}

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  const time = `${hours}:${mins}:${sec}`;
  clock.textContent = time;
} 
getTime();
setInterval(getTime, 1000);
getDate();