import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday,09",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather">
          <form>
            <div className="row one">
              <div className="col-9">
                <input
                  type="Search"
                  placeholder="Insert city"
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary button"
                />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <h5> {weatherData.date}</h5>
          <div className="row one">
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="sun-icon"
              />
              <div className="temperature">
                {Math.round(weatherData.temperature)}{" "}
              </div>
              <div className="units">ºF | ºC</div>
            </div>

            <div className="col-6">
              <ul>
                <li>Precip :87%</li>
                <li>Humidity :{weatherData.humidity}</li>
                <li>Wind :{weatherData.wind}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="credit">
          <a
            className="link"
            href="https://github.com/anasanmua/react-weather-app0.1"
          >
            {" "}
            Open source{" "}
          </a>{" "}
          Coded by Ana S.M.
        </div>
      </div>
    );
  } else {
    const apiKey = "2a01e7be0e91da230ebdfdb345e57960";
    let city = "New York";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading...";
}
