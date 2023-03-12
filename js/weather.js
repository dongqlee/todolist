const API_KEY = "76acc525f0823946782163644c560d3c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const nowLocation = document.getElementById('now_location');
    const nowLocationWeather = document.getElementById('now_location_weather');
    const nowLocationTemperature = document.getElementById('now_location_temperature');
    nowLocation.innerText = '현재 위치 : '+data.name;
    nowLocationWeather.innerText = '현재 날씨 : ' +data.weather[0].main;
    nowLocationTemperature.innerText = '현재 기온 : ' + data.main.temp +' 도';
  });
}
function onGeoErr() {
  alert("can't find you.");
}

navigator.geolocation.getCurrentPosition( onGeoOk, onGeoErr)

const weather = document.getElementById('weather');
const temperature = document.getElementById('temperature');

fetch('https://goweather.herokuapp.com/weather/Busan').then((response) => response.json()).then((data) => {
  weather.innerText = data['description']
  temperature.innerText = data['temperature']
})

const locationWeather = document.getElementById('location_weather');
const li = document.createElement('li');
const span = document.createElement('span');

function getWeather() {
  let city = document.getElementById('city').value;
  fetch('https://goweather.herokuapp.com/weather/' + city).then((response) => response.json()).then((data) => {
    span.innerText = '날씨 : ' + data['description'] +' 온도 : '+ data['temperature']
    li.appendChild(span);
    locationWeather.appendChild(li);
  })
}

