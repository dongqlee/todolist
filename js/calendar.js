const cntDate = new Date();

let thisMonth = new Date(cntDate.getFullYear(), cntDate.getMonth(), cntDate.getDate());

function rendarCal(thisMonth) {
  currentYear = thisMonth.getFullYear();
  currentMonth = thisMonth.getMonth();

  const lastDate = new Date(currentYear, currentMonth, 0);
  const prevDate = lastDate.getDate();
  const prevDay = lastDate.getDay();

  const curEndDate = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = curEndDate.getDate();
  const nextDay = curEndDate.getDay();

  const calendarYearMonth = document.querySelector('.calendar_year_month');
  calendarYearMonth.innerText = `${currentYear}년 ${currentMonth+1}월`
  
  const dateBox = document.querySelector('.date_box');
  dateBox.innerHTML = '';
  if(prevDay !== 6) {
    for(let i = prevDate - prevDay; i <= prevDate; i++ ) {
      dateBox.innerHTML = dateBox.innerHTML +
      "<div class='dates prev disable'>" +
      i + 
      "</div>";
    }
  }
  for(let i = 1; i <= nextDate; i++) {
    dateBox.innerHTML = dateBox.innerHTML + 
    "<div class='dates current'>"+
    i +
    "</div>";
  }
  if(nextDay !==6) {
    for(let i =1; i<= 6 - nextDate; i++) {
      dateBox.innerHTML = dateBox.innerHTML +
      "<div class='dates next disable>" +
      i +
      "</div>";
    }
  }

  const calToday = new Date();
  if(currentYear === calToday.getFullYear() && currentMonth === calToday.getMonth()) {
    const todayDate = calToday.getDate();
    let curMonthDates = document.querySelectorAll('.current');
    curMonthDates[todayDate - 1].classList.add('today');
  }
}
rendarCal(thisMonth);

const btnPrev = document.querySelector('.btn_left');
const btnNext = document.querySelector('.btn_right');

function prevMonth() {
  thisMonth = new Date(currentYear, currentMonth - 1, 1);
  rendarCal(thisMonth);
}
function nextMonth() {
  thisMonth = new Date(currentYear, currentMonth + 1, 1);
  rendarCal(thisMonth);
}

btnPrev.addEventListener('click', prevMonth);
btnNext.addEventListener('click', nextMonth);