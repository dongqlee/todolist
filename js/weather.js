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
