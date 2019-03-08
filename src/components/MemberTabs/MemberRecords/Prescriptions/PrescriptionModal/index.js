import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const PrescriptionModal = ({ show, handleClose, name }) => (
  <Modal show={show} onHide={handleClose} className="modal--records">
    <Modal.Header closeButton>
      <Modal.Title>View Record Detail</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="modal__heading pb-2 mb-4">
        <div>
          <h3>Prescription</h3>
          <p className="subheading">
            Dr. Joseph Adams, MD | Albany Community Health Center
          </p>
        </div>
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
          <dd>{name}</dd>
        </dl>
        <dl>
          <dt>Clinic Contact</dt>
          <dd>(555) 555-5555</dd>
        </dl>
        <dl>
          <dt>Address</dt>
          <dd>
            123 Texas Ave.<br />Albany, NY
          </dd>
        </dl>
      </div>
    </Modal.Body>
  </Modal>
);

PrescriptionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default PrescriptionModal;
