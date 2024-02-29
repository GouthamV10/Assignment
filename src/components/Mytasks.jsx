import React, { Component } from "react";
import "../components/Mytasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSort,
  faSearch,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import data from "../constants/data";
import { Link, withRouter } from "react-router-dom";
import Screen2 from "../views/Screen2";

export default class Mytasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 0,
      tasksData: data,
      clickedRowIndex: 0,
    };
  }

  handleCategory(index) {
    this.setState({ activeButton: index });
  }

  handleDelete(index) {
    const updatedTasksData = [...this.state.tasksData];
    updatedTasksData.splice(index, 1);
    this.setState({ tasksData: updatedTasksData });
  }

  handleRowClick(index) {
    this.setState({ clickedRowIndex: index });
  }

  render() {
    const categorydata = [
      { label: "Draft Tasks", count: 130 },
      { label: "InProgress Tasks", count: 3 },
      { label: "Forwarded Tasks", count: 1 },
      { label: "Completed Tasks", count: 0 },
      { label: "SP Invoices", count: 0 },
    ];

    return (
      <div className="mytasks">
        <div className="task-buttons">
          {categorydata.map((button, index) => (
            <div
              key={index}
              className={`task-button ${
                this.state.activeButton === index ? "active" : ""
              }`}
              onClick={() => this.handleCategory(index)}
            >
              {button.label} <span className="badge">{button.count}</span>
            </div>
          ))}
        </div>
        <Link to={"/screen2"} Component={Screen2}>
          <div className="download">
            <button className="download-button">
              Download
              <FontAwesomeIcon className="fa-angle-down" icon={faAngleDown} />
            </button>
          </div>
        </Link>
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr className="table-header-row">
                <th>
                  <span className="header">Task ID</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">PO Number</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Plant Name</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Company Name</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Received Date</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Vendor Code</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Vendor Name</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Invoice Number</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Invoice Date</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>
                  <span className="header">Invoice Amount</span>
                  <span className="table-icons">
                    <FontAwesomeIcon icon={faSort} className="sort-icon" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasksData.map((item, index) => (
                <tr
                  key={index}
                  className={`table-row ${
                    index === this.state.clickedRowIndex ? "highlight" : ""
                  }`}
                  onClick={() => this.handleRowClick(index)}
                >
                  <td>{item.taskId}</td>
                  <td>{item.poNumber}</td>
                  <td>{item.plantName}</td>
                  <td>{item.companyName}</td>
                  <td>{item.receivedDate}</td>
                  <td>{item.vendorCode}</td>
                  <td>{item.vendorName}</td>
                  <td>{item.invoiceNumber}</td>
                  <td>{item.invoiceDate}</td>
                  <td>{item.invoiceAmount}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="delete-icon"
                      onClick={() => this.handleDelete(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
