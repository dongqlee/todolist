let now = new Date();
let calYear = now.getFullYear();
let calMonth = now.getMonth() + 1;
let calDate = now.getDate();

//윤년 계산
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if(calYear % 400 == 0) {
  monthDays[1] = 29;
} else if(calYear % 100 == 0) {
  monthDays[1] = 28;
} else if(calYear % 400 == 0) {
  monthDays[1] = 29;
}

//한 달의 마지막 날
let calLastDate = monthDays[now.getMonth()];

//첫 날 요일 구하기
let startDay = new Date(calYear, now.getMonth(), 1);
let calStartDay = startDay.getDay();

let calWeek = Math.ceil((calStartDay + calLastDate) / 7);


