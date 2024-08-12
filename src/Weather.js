import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" />
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </div>
        </form>
        <h1>Dublin</h1>
        <ul>
          <li>Monday 12:30</li>
          <li>Partly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            8
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
}