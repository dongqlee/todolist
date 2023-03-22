const dDay = document.getElementById('dDay');
const dDayList = document.getElementById('dDay_list');
const dDayForm = document.getElementById('dDay_form');
const dDayDate = document.getElementById('dDay_date');
const dDayTitle = document.getElementById('dDay_title');

let nowDate1 = new Date();
let curYear = nowDate1.getFullYear();
let curMonth = String(nowDate1.getMonth()+1).padStart(2, '0');
let curDate = String(nowDate1.getDate()).padStart(2, '0');
dDayDate.value = `${curYear}-${curMonth}-${curDate}`;

const DDAY_KEY = 'dDay';
let dDays = [];

function krDate(date) {
  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const kstGap = 9 * 60 * 60 * 1000;
  let krDate = new Date(utc + kstGap);
  krDate = new Date(krDate.setHours(0, 0, 0, 0));
  return krDate
}
let today = krDate(new Date());

function saveDDays(){
  localStorage.setItem(DDAY_KEY, JSON.stringify(dDays));
}

function deleteDDayBox(e) {
  const div = e.target.parentElement;
  div.remove();
  dDays = dDays.filter((item) => item.id != parseInt(div.id));
  saveDDays();
}
function createDDay(newDDayobj) {
  const div = document.createElement('div');
  const btn = document.createElement('button');
  const spanDate = document.createElement('span');
  const spanCnt = document.createElement('span');
  const spanTitle = document.createElement('span');

  div.id = newDDayobj.id;
  div.classList.add('dDay_li');

  btn.classList.add('btn_deleted_Day');
  btn.innerText = '삭제';
  btn.addEventListener('click', deleteDDayBox);

  spanDate.classList.add('d_date');
  spanCnt.classList.add('d_cnt');
  spanTitle.classList.add('d_title');
  spanDate.innerText = newDDayobj.endday;
  spanCnt.innerText = newDDayobj.cntDay;
  spanTitle.innerText = newDDayobj.title;

  div.appendChild(spanDate);
  div.appendChild(spanCnt);
  div.appendChild(spanTitle);
  div.appendChild(btn);
  dDayList.appendChild(div);
  dDay.appendChild(dDayList);
}

function addSubmit(e) {
  e.preventDefault();

  let endDate = krDate(new Date(dDayDate.value));
  let timedelta = endDate - today;
  let cntDay = Math.floor(timedelta / (1000 * 60 * 60 * 24));

  if(cntDay > 0) {
    cntDay = cntDay * (-1);
  } else if(cntDay ===0){
    cntDay = '-Day'
  } else {
    cntDay = '+' + Math.abs(cntDay);
  }
  const newDDayobj = {
    id : Date.now(),
    endday : dDayDate.value,
    cntDay : `D${cntDay}`,
    title : dDayTitle.value,
  }
  dDays.push(newDDayobj);
  createDDay(newDDayobj);
  saveDDays();

  dDayDate.value = `${curYear}-${curMonth}-${curDate}`;
  dDayTitle.value = '';
}

dDayForm.addEventListener('submit', addSubmit);

const savedDDays = localStorage.getItem(DDAY_KEY);
if(savedDDays !== null){
  const parsedDDays = JSON.parse(savedDDays);
  dDays = parsedDDays;
  parsedDDays.forEach(createDDay);
}