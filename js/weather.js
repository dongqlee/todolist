const API_KEY = "76acc525f0823946782163644c560d3c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const nowLocationWeather = document.getElementById('now_location_weather');
    nowLocationWeather.innerText = data.name + " / " + data.weather[0].main + " / " + data.main.temp + " °C";
  });
}
function onGeoErr() {
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition( onGeoOk, onGeoErr)

//부산 날씨
// const weather = document.getElementById('weather');
// const temperature = document.getElementById('temperature');
// fetch('https://cors-anywhere.herokuapp.com/https://goweather.herokuapp.com/weather/Busan').then((response) => response.json()).then((data) => {
//   weather.innerText = data['description']
//   temperature.innerText = data['temperature']
// })

const locationWeather = document.getElementById('location_weather');
const li = document.createElement('li');
const span = document.createElement('span');

function getWeather() {
  let city = document.getElementById('city').value;
  fetch('https://cors-anywhere.herokuapp.com/https://goweather.herokuapp.com/weather/' + city).then((response) => response.json()).then((data) => {
    span.innerText = '날씨 : ' + data['description'] +' 온도 : '+ data['temperature']
    li.appendChild(span);
    locationWeather.appendChild(li);
  })
}

