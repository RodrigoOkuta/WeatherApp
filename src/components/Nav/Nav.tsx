import React, { Component } from "react";
import { Cities } from "../../pages/Weather";

import "./Nav.css";

interface MyProps {
  active: number;
  onClick: (city: Cities) => void;
}

export default class Nav extends Component<MyProps> {
  render() {
    const { active, onClick } = this.props;

    return (
      <div className="nav-items">
        <div
          className={active === 0 ? "active" : ""}
          onClick={() => onClick(Cities.MONTREAL)}
        >
          MONTREAL
        </div>
        <div
          className={active === 1 ? "active" : ""}
          onClick={() => onClick(Cities.SAO_PAULO)}
        >
          SAO PAULO
        </div>
        <div
          className={active === 2 ? "active" : ""}
          onClick={() => onClick(Cities.LOS_ANGELS)}
        >
          LOS ANGELS
        </div>
      </div>
    );
  }
}
