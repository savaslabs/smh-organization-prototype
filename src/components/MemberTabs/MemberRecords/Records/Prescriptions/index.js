import React, { Component, Fragment } from 'react';
import { Table, Modal } from 'react-bootstrap';

import prescriptions from '../../../../../data/prescriptions';

const PrescriptionModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} className="modal--records">
    <Modal.Header closeButton>
      <Modal.Title>View Record Detail</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="modal__heading d-flex justify-content-between align-items-end pb-2 mb-4">
        <div>
          <h3>Prescription</h3>
          <p className="modal__heading__details">Dr. Joseph Adams, MD | Albany Community Health Center</p>
        </div>
        <p className="modal__heading__links">Print | Download</p>
      </div>
      <div className="d-flex flex-wrap">
        <dl>
          <dt>Medication Name</dt>
          <dd>Betaxolol</dd>
        </dl>
        <dl>
          <dt>Type</dt>
          <dd>Beta Blocker</dd>
        </dl>
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

class Prescriptions extends Component {
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
            <th>Record Name</th>
            <th>Pharmacy</th>
          </tr>
          </thead>
          <tbody>
          {prescriptions.map((record, key) =>
            <tr key={key}>
              <td>{record.date}</td>
              <td className="modal-link" onClick={this.handleShow}>{record.name}</td>
              <td>{record.pharmacy}</td>
            </tr>
          )}
          </tbody>
        </Table>
        <PrescriptionModal show={this.state.show} handleClose={this.handleClose} />
      </Fragment>
    );
  }
}

export default Prescriptions;
