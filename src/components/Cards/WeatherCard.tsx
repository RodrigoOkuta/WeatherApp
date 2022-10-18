import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSun,
  faCloud,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import "./WeatherCard.css";
import FutureWeatherCard from "./FutureWeatherCard";

export type weatherApiResult = {
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  temp: { eve: number };
  dt: number;
};

type Icons = {
  [key: string]: IconDefinition;
};

interface MyProps {
  weatherList: weatherApiResult[];
}

export const weatherIcons: Icons = {
  Rain: faCloudRain,
  Thunderstorm: faCloudBolt,
  Drizzle: faCloudRain,
  Snow: faSnowflake,
  Clear: faSun,
  Clouds: faCloud,
};

export default class WeatherCard extends Component<MyProps> {
  render() {
    const { weatherList } = this.props;
    const [today, ...forecast] = weatherList;

    if (!today) {
      return null;
    }

    return (
      <div className="weather-card">
        <div className="todays-forecast">
          <div>Today</div>
          <div className="weather-wrapper">
            <FontAwesomeIcon
              className="icon"
              size="lg"
              icon={weatherIcons[today?.weather[0].main]}
            />
            <div className="weather-info">
              <span className="temp">{Math.round(today?.temp?.eve)}</span>
              <span>{today?.weather[0].main}</span>
            </div>
          </div>
        </div>
        <div className="future-forecast-weather">
          {forecast.map((weather, index) => (
            <FutureWeatherCard key={index} forecastWeather={weather} />
          ))}
        </div>
      </div>
    );
  }
}
