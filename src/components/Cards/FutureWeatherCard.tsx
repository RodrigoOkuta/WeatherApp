import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { weatherApiResult, weatherIcons } from "./WeatherCard";
import { getDayOfWeek } from "../../utils";

import "./FutureWeatherCard.css";

interface MyProps {
  forecastWeather: weatherApiResult;
}

export default class FutureWeatherCard extends Component<MyProps> {
  render() {
    const { forecastWeather } = this.props;

    if (!forecastWeather) {
      return null;
    }

    return (
      <div className="future-weather-wrapper-card">
        <span>
          {getDayOfWeek(new Date(forecastWeather.dt * 1000).getDay())}
        </span>
        <FontAwesomeIcon
          className="icon"
          size="lg"
          icon={weatherIcons[forecastWeather.weather[0].main]}
        />

        <span className="temp">{Math.round(forecastWeather?.temp?.eve)}</span>
      </div>
    );
  }
}
