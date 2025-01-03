const searchElement = document.querySelector('i');
searchElement.addEventListener("click", () => {
  updateEvent();
});

const inputSearchElement = document.querySelector('input');
inputSearchElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updateEvent();
  }
});

function updateWeather(obj) {
  const degreeElement = document.querySelector('h1');
  degreeElement.innerHTML = `${obj.current.temp_c}<sup>o</sup>C`;
  const placeElement = document.querySelector('h2');
  placeElement.innerHTML = `${obj.location.name}`;
  const humidityElement = document.querySelector('.humidity_num');
  humidityElement.innerHTML = `${obj.current.humidity}%`;
  const windSpeedElement = document.querySelector('.wind_speed_num');
  windSpeedElement.innerHTML = `${obj.current.wind_kph} km/h`
  const imageElement = document.querySelector('img');
  imageElement.src = obj.current.condition.icon;
}

function updateEvent() {
  const inputElement = document.querySelector('input').value;
  fetch(`http://api.weatherapi.com/v1/current.json?key=30912d559a5b4b7b97f153747250201&q=${inputElement}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      updateWeather(data)
    })
}
