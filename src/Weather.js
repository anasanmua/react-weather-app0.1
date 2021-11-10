import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="Weather">
        <form>
          <div className="row one">
            <div className="col-9">
              <input
                type="search"
                placeholder="Insert city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Toronto, ON, Canada</h1>
        <h5> Thu, 6 PM, Rain</h5>
        <div className="row one">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
            50 ºF | ºC
          </div>

          <div className="col-6">
            <ul>
              <li>Precip:87%</li>
              <li>Humidity:93%</li>
              <li>Wind:12 mph</li>
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
}
