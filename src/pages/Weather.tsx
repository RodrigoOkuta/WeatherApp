import React, { Component } from "react";
import axios from "axios";
import Nav from "../components/Nav/Nav";

import "./Weather.css";
import WeatherCard, { weatherApiResult } from "../components/Cards/WeatherCard";

export enum Cities {
  MONTREAL,
  SAO_PAULO,
  LOS_ANGELS,
}

interface MyState {
  active: Cities;
  weatherList: weatherApiResult[];
}

const coord = {
  [Cities.MONTREAL]: { lat: "45.5", lon: "-73.56" },
  [Cities.SAO_PAULO]: { lat: "-23.59", lon: "-46.69" },
  [Cities.LOS_ANGELS]: { lat: "34.02", lon: "-118.49" },
};

const weatherApi = (lat: string, lon: string) =>
  `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

export default class Weather extends Component {
  state: MyState = { active: Cities.MONTREAL, weatherList: [] };

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(_prevProps: unknown, prevState: MyState) {
    if (prevState.active !== this.state.active) {
      this.getWeather();
    }
  }

  handleNavClick(city: Cities) {
    this.setState({ active: city });
  }

  async getWeather() {
    const { active } = this.state;
    const { lat, lon } = coord[active];

    const result = await axios.get(weatherApi(lat, lon));

    this.setState({ weatherList: result.data.list.slice(0, 5) });
  }

  render() {
    const { active, weatherList } = this.state;

    return (
      <div className="weather">
        <Nav onClick={this.handleNavClick.bind(this)} active={active} />
        <WeatherCard weatherList={weatherList} />
      </div>
    );
  }
}
