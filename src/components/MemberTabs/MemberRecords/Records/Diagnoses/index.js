import React, { Component, Fragment } from 'react';
import { Table, Modal } from 'react-bootstrap';

const DiagnosesModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} className="modal--records">
    <Modal.Header closeButton>
      <Modal.Title>View Record Detail</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="modal__heading d-flex justify-content-between align-items-end pb-2 mb-4">
        <div>
          <h3>Diagnosis</h3>
          <p className="modal__heading__details">Dr. Joseph Adams, MD | Albany Community Health Center</p>
        </div>
        <p className="modal__heading__links">Print | Download</p>
      </div>
      <div className="d-flex flex-wrap">
        <dl>
          <dt>Diagnosis</dt>
          <dd>High Blood Pressure</dd>
        </dl>
        <dl>
          <dt>Provider Name</dt>
          <dd>Joseph Adams, MD</dd>
        </dl>
        <dl>
          <dt>Clinic Contact</dt>
          <dd>(555) 555-5555</dd>
        </dl>
        <dl>
          <dt>Address</dt>
          <dd>123 Texas Ave.<br />Albany, NY</dd>
        </dl>
      </div>
    </Modal.Body>
  </Modal>
);

class Diagnoses extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
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
        <Table hover className="table--records">
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
            <td className="modal-link" onClick={this.handleShow}>High Blood Pressure</td>
            <td>Joseph Adams, MD</td>
          </tr>
          </tbody>
        </Table>
        <DiagnosesModal show={this.state.show} handleClose={this.handleClose} />
      </Fragment>
    );
  }
}

export default Diagnoses;
