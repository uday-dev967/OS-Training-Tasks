"use strict";
const apiKey = "439d4b804bc8187953eb36d2a8c26a02";
const getWeatherData = function (data) {
  const { list } = data;
  const [cityData] = list;
  const { coord, main, name, weather, wind } = cityData;
  const { lat: latitude, lon: longitude } = coord;
  const {
    feels_like: feelsLike,
    humidity,
    pressure,
    sea_level: seaLevel = "Unavailable",
    temp: temperature,
    temp_max: maxTemp,
    temp_min: minTemp,
  } = main;
  const { main: weatherStatus } = weather[0];
  const { speed: windSpeed } = wind;
  console.log(
    `City: ${name},
Latitude : ${latitude},
Longitude : ${longitude},
FeelsLike: ${(feelsLike - 273.15).toFixed(2)}\u00B0C,
Humidity: ${humidity}%,
Pressure: ${pressure}hPa,
SeaLevel: ${seaLevel === "Unavailable" ? seaLevel : `${seaLevel}millibars`},
Temperature: ${(temperature - 273.15).toFixed(2)}\u00B0C,
MaxTemp: ${(maxTemp - 273.15).toFixed(2)}\u00B0C,
MinTemp: ${(minTemp - 273.15).toFixed(2)}\u00B0C,
Weather: ${weatherStatus},
Wind speed: ${windSpeed}m/s`
  );
  /*
  clouds: {all: 100}
coord: {lat: 16.9333, lon: 82.2167}
dt: 1692248950
id: 1268561
main:{ feels_like: 306
grnd_level: 1006
humidity: 49
pressure: 1007
sea_level: 1007
temp: 304.41
temp_max: 304.41
temp_min: 304.41
}
name: "Kākināda"
rain: {1h: 0.52}
snow: null
sys: {country: 'IN'}
weather: Array(1)
0: {id: 500, main: 'Rain', description: 'light rain', icon: '10d'}
wind: {speed: 4.74, deg: 271}
  */
  // console.log(cityData);
};

const fetchWeather = function (cityArr) {
  cityArr.forEach((el) => {
    fetch(
      `https://openweathermap.org/data/2.5/find?q=${el},in&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.list.length < 1) {
          throw new Error(
            `Caonnot find the City "${el}" Please Enter the valid city name, 2 letter contry code for accurate results.`
          );
        }
        return getWeatherData(data);
      })
      .catch((e) =>
        console.error(
          `Something went wrong. ${e.message} Hope you find this helpful`
        )
      );
  });
};

const cities = ["kakinada,IN", "mumbai,IN", "delhi,IN", "iogiuhguir"];
fetchWeather(cities);
