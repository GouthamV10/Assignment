import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Mytasks from "./Mytasks";
import Grouptasks from "./Grouptasks";
import "./Tasks.css"; // Import CSS for Tasks component

export default class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <div className="taskbar">
          <NavLink to="/" activeClassName="active" className="tasksname">
            My Tasks
          </NavLink>
          <NavLink
            to="/grouptasks"
            activeClassName="active"
            className="tasksname"
          >
            Group Tasks
          </NavLink>
        </div>
        <Routes className="taskbar">
          <Route path="/" element={<Mytasks />} />
          <Route path="/grouptasks" element={<Grouptasks />} />
        </Routes>
      </div>
    );
  }
}
