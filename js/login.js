
const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('.login_input');
const welcome = document.querySelector('#welcome');
const naming = document.querySelector('#naming');
const btnLogOut = document.querySelector('#log_out');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintName(username);
}

function paintName(username) {
  naming.innerText = `Welcome ${username}`;
  welcome.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintName(savedUserName);
}

btnLogOut.addEventListener('click', ()=> {
  localStorage.removeItem(USERNAME_KEY);
  if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    welcome.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = ""
  }
  alert('다음에 뵙겠습니다:)')
})