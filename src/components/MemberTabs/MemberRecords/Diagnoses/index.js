import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";

import DiagnosisModal from "./DiagnosisModal";

class Diagnoses extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Fragment>
        <Table hover responsive className="table--records">
          <thead>
            <tr>
              <th>Date</th>
              <th>Code</th>
              <th>Diagnosis</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09/12/2018</td>
              <td>110</td>
              <td className="modal-link" onClick={this.handleShow}>
                High Blood Pressure
              </td>
              <td>Joseph Adams, MD</td>
            </tr>
          </tbody>
        </Table>
        <DiagnosisModal
          show={this.state.show}
          handleClose={this.handleClose}
          name="Joseph Adams, MD"
        />
      </Fragment>
    );
  }
}

export default Diagnoses;
