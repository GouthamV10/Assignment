import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faRightLeft,
  faAngleDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Document, Page } from "react-pdf";
import "../views/Screen2.css";

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      file: null,
      taskId: null,
      activeButton: 0,
      showInvoice: true,
      showVendor: true,
      formData: {
        documentType: "",
        invoiceNumber: "",
        invoiceDate: "",
        invoiceReceiptDate: "",
        baselineDate: "",
      },
    };
  }

  onFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({ file });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  componentDidMount() {}

  handleInvoice = () => {
    this.setState({
      showInvoice: !this.state.showInvoice,
    });
  };

  handleVendor = () => {
    this.setState({
      showVendor: !this.state.showVendor,
    });
  };

  handleButton = (index) => {
    this.setState({ activeButton: index });
  };

  render() {
    const { pageNumber, numPages, file } = this.state;
    const buttonsData = [
      { label: "Invoice Details" },
      { label: "Vendor Evaluation" },
      { label: "Checklist" },
      { label: "Statuatory Compliance" },
      { label: "PO Details" },
      { label: "Action History" },
    ];
    return (
      <div className="screen2">
        <div className="topbar2">
          <div className="left-info">
            <FontAwesomeIcon className="left-icon" icon={faArrowLeft} />
            <span>Task Draft</span>
          </div>
          <div className="right-info">
            <FontAwesomeIcon className="right-icon" icon={faRightLeft} />
            <button className="button1">Save to Draft</button>
            <button className="button2">Submit</button>
          </div>
        </div>
        <div className="section">
          <div className="leftscreen">
            <label htmlFor="pdfinput" className="file-label">
              Upload File
              <input
                type="file"
                id="pdfinput"
                onChange={this.onFileChange}
                className="pdfinput"
              />
            </label>
            {file && (
              <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            )}
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
          <div className="rightscreen">
            <div className="rightscreen-bar">
              {buttonsData.map((button, index) => (
                <div
                  key={index}
                  className={`rightscreenbutton ${
                    this.state.activeButton === index ? "active-button" : ""
                  }`}
                  onClick={() => this.handleButton(index)}
                >
                  {button.label}
                </div>
              ))}
            </div>

            <div className="invoice-details">
              <div className="">
                <div className="id-dropdown-bar" onClick={this.handleInvoice}>
                  <FontAwesomeIcon
                    className="details-icon"
                    icon={faChevronDown}
                  />{" "}
                  INVOICE DETAILS
                </div>

                {this.state.showInvoice && (
                  <div className="dropdown-content">
                    <div className="rows">
                      <label htmlFor="documentType">
                        Document Type <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <select
                          value={""}
                          onChange={this.handleDocumentTypeChange}
                          required
                        >
                          <option value="TAX INVOICE">TAX INVOICE</option>
                        </select>
                      </div>
                    </div>

                    <div className="rows">
                      <label htmlFor="invoiceNumber">
                        Invoice Number
                        <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <input
                          type="text"
                          value={" "}
                          onChange={this.handleInvoiceNumberChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="rows">
                      <label htmlFor="invoiceDate">
                        Invoice Date <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <input
                          type="date"
                          value={" "}
                          onChange={(e) =>
                            this.handleInputChange(e, "invoiceDate")
                          }
                          placeholder="Select Date"
                          required
                        />
                      </div>
                    </div>
                    <div className="rows">
                      <label htmlFor="invoiceReceiptDate">
                        Invoice Receipt Date
                        <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <input
                          type="date"
                          value={" "}
                          onChange={(e) =>
                            this.handleInputChange(e, "invoiceReceiptDate")
                          }
                          placeholder="Select Date"
                          required
                        />
                      </div>
                    </div>
                    <div className="rows">
                      <label htmlFor="baselineDate">
                        Baseline Date <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <input
                          type="date"
                          value={" "}
                          onChange={(e) =>
                            this.handleInputChange(e, "baselineDate")
                          }
                          placeholder="Select Date"
                          required
                        />
                      </div>
                    </div>
                    <div className="rows">
                      <label htmlFor="formSubmissionDate">
                        Form Submission Date
                        <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <span>dd-mm-yyyy</span>
                      </div>
                    </div>
                    <div className="rows">
                      <label htmlFor="invoiceInitiationDuration">
                        Invoice Initiation Duration (In Days):
                      </label>
                      <div className="inputs">
                        <span></span>
                      </div>
                    </div>

                    <div className="rows">
                      <label htmlFor="expeditedPaymentRequired">
                        Expedited Payment Required{" "}
                        <span className="required">*</span> :
                      </label>
                      <div className="inputs">
                        <label htmlFor="yes">
                          <input
                            type="radio"
                            id="yes"
                            name="expeditedPayment"
                            value="yes"
                          />
                          Yes
                        </label>
                        <label htmlFor="no">
                          <input
                            type="radio"
                            id="no"
                            name="expeditedPayment"
                            value="no"
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="vendor-details">
                <div className="vd-dropdown-bar" onClick={this.handleVendor}>
                  <FontAwesomeIcon
                    className="details-icon"
                    icon={faChevronDown}
                  />{" "}
                  VENDOR DETAILS AS PER ORDER
                </div>

                {this.state.showVendor && (
                  <div className="dropdown-content">
                    <div className="rows">
                      <label htmlFor="">
                        Vendor Code <span className="required">*</span> :
                      </label>
                      <span className="inputs"> </span>
                    </div>
                    <div className="rows">
                      <label htmlFor="">
                        Vendor Name <span className="required">*</span> :
                      </label>
                      <span className="inputs">J.R.C</span>
                    </div>

                    <div className="rows">
                      <label htmlFor="">Vendor GST:</label>
                      <span className="inputs"></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-left">
            <button className="bottom-bar-button">
              Currency:<span className="button-text"> INR</span>
            </button>
            <button className="bottom-bar-button">
              Inv Basic Amt:
              <span className="button-text"> NA</span>
            </button>
            <button className="bottom-bar-button">
              Basic Tax Amt:
              <span className="button-text"> NA</span>
            </button>
            <button className="bottom-bar-button">
              Inv Total Amt:
              <span className="button-text"> NA</span>
            </button>
            <button className="bottom-bar-button">
              SRN Amt:<span className="button-text"> NA</span>
            </button>
            <button className="bottom-bar-button">
              Total Amt Diff:
              <span className="button-text"> NA</span>
            </button>
            <button className="bottom-bar-button">
              Total Qty Diff: <span className="button-text"> NA</span>
            </button>
            <button className="bottom-bar-button">
              Net Payable Amt: <span className="button-text"> NA</span>
            </button>
          </div>

          <div className="bottom-bar-right">
            <button className="select-action">
              Select Action
              <FontAwesomeIcon
                className="select-action-icon"
                icon={faAngleDown}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
