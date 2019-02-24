import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const MedUnverified = () => (
  <Form>
    <Form.Group controlId="verifyMedId">
      <Form.Label>Medicaid/Medicare ID</Form.Label>
      <Form.Control type="text" placeholder="5A5-5A-5A5A-AA" />
    </Form.Group>
    <Form.Text>OR</Form.Text>
    <Form.Group controlId="verifySsn">
      <Form.Label>Social Security Number</Form.Label>
      <Form.Control type="text" placeholder="555-55-5555" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Save
    </Button>
  </Form>
);

const MedVerified = () => (
  <div>
    <p><strong>Medicaid/Medicare ID</strong></p>
    <p>5A5-5A-5A5A-AA</p>
    <p><strong>Social Security Number</strong></p>
    <p>xxx-xx-5555</p>
  </div>
);

const MedicalId = ({ medVerified }) => (
  medVerified ? <MedVerified /> : <MedUnverified />
);

MedicalId.propTypes = {
  medVerified: PropTypes.bool.isRequired
};

export default MedicalId;