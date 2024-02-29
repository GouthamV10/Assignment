import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";
import "../views/Screen1.css";
import Tasks from "../components/Tasks";

export default class Screen1 extends Component {
  render() {
    return (
      <div className="screen1">
        <Sidebar />
        <div className="mainscreen">
          <div className="topbar">
            <div className="left-info">
              <FontAwesomeIcon className="left-icon" icon={faArrowLeft} />
              <span>Invoice Processing</span>
            </div>
            <div className="right-info">
              <div className="profile-logo">NA</div>
              <span>NS2P ADMIN</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="path-bar">
            <div className="page-path">
              <span className="path-item">Home</span>
              <span className="separator">/</span>
              <span className="path-item maintask">Task</span>
            </div>
          </div>
          <Tasks />
        </div>
      </div>
    );
  }
}
