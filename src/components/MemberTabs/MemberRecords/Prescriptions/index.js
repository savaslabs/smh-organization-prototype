import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";

import PrescriptionModal from "./PrescriptionModal";
import prescriptions from "../../../../data/prescriptions";

class Prescriptions extends Component {
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
              <th>Record Name</th>
              <th>Pharmacy</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((record, key) => (
              <tr key={key}>
                <td>{record.date}</td>
                <td className="modal-link" onClick={this.handleShow}>
                  {record.name}
                </td>
                <td>{record.pharmacy}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <PrescriptionModal
          show={this.state.show}
          handleClose={this.handleClose}
          name="Joseph Adams, MD"
        />
      </Fragment>
    );
  }
}

export default Prescriptions;
