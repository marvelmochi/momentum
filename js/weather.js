const API_KEY = config.API_KEY;
const weatherBox = document.getElementById("weather");
function onGeoSuccess(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let weather = `${data.weather[0].main}`;
      if (weather === "Rain" || weather === "Drizzle") {
        weather = "🌧";
      } else if (weather === "Clear") {
        weather = "🌞";
      } else if (weather === "Snow") {
        weather = "⛄";
      } else if (weather === "Clouds") {
        weather = "☁";
      } else if (weather === "Thunderstorm") {
        weather = "⚡";
      }
      const temp = `${data.main.temp.toFixed(1)}°C`;

      weatherBox.innerText = `${weather} ${temp}`;
    });
}
function onGeoError() {}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
