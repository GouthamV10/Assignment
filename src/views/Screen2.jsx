import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { Document, Page } from "react-pdf";

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      file: null,
    };
  }

  onFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({ file });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages, file } = this.state;

    return (
      <div className="screen2">
        <div className="topbar2">
          <div>
            <div className="left-info">
              <FontAwesomeIcon className="left-icon" icon={faArrowLeft} />
              <span>Invoice Processing</span>
            </div>
            <div className="left-info">
              <FontAwesomeIcon className="left-icon" icon={faArrowsLeftRight} />
              <button>Save to Draft</button>
              <button>Submit</button>
            </div>
            <div className="leftscreen">
              <input type="file" onChange={this.onFileChange} />
              {file && (
                <Document
                  file={file}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              )}
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
            <div className="rightscreen"></div>
          </div>
        </div>
      </div>
    );
  }
}
