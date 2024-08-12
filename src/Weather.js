import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setReady(true);
}

if (ready) {
    return (
      <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Enter a city..." 
                    className="form-control"
                    autoFocus="on" 
                    />
                </div>
                <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-primary w-100" 
                    />
                </div>
            </div>
        </form>
        <h1>{weatherData.data.city}</h1>
        <ul>
          <li>Monday 12:30</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
                className="float-left" 
                />
            <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            </div>
           </div>
          </div>
        <div className="col-6">
            <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 59%</li>
            <li>Wind: 23 km/h</li>
            </ul>
        </div>
      </div>
    </div>
    );
} else {
    const apiKey = "91e4be9d3f0ce62462b88df7804804ae";
    let city = "Dublin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}