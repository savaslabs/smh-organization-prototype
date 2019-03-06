import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const DiagnosisModal = ({ show, handleClose, name }) => (
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
          <dd>{name}</dd>
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

DiagnosisModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default DiagnosisModal;
