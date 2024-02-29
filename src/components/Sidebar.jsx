import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPieChart,
  faQrcode,
  faSearch,
  faList,
  faCircleQuestion,
  faUserGroup,
  faTableCells,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Sidebar.css";
import Logo from "../assets/logo.png";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="logo" height={40} width={40} />
        </div>
        <div className="menu-icons">
          <FontAwesomeIcon icon={faTableCells} />
          <FontAwesomeIcon icon={faPieChart} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faQrcode} />
          <FontAwesomeIcon icon={faList} />
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faQrcode} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faUserGroup} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCircleQuestion} />
        </div>
      </div>
    );
  }
}
