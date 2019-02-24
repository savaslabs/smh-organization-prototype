import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const IdUnverified = () => (
  <Form>
    <Form.Group controlId="verifyIdType">
      <Form.Label>Document Typet</Form.Label>
      <Form.Control as="select">
        <option>Driver's License</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="verifyExpiration">
      <Form.Label>Expiration Date</Form.Label>
      <Form.Control type="text" placeholder="mm/dd/yyyy" />
    </Form.Group>
    <Form.Group controlId="verifyCertify">
      <Form.Check type="checkbox" label="I certify that I can verify this member’s identity." />
    </Form.Group>
    <Button variant="primary" type="submit">
      Verify
    </Button>
  </Form>
);

const IdVerified = () => (
  <div>
    <p><strong>Document Type</strong></p>
    <p>Driver's License</p>
    <p><strong>Expiration Date:</strong></p>
    <p>02/13/2019</p>
    <p><strong>Verification Details</strong></p>
    <p>Cheryl Deggins (Interfaith) verified this member’s identity on 2/13/2019.</p>
  </div>
);

const IdVerification = ({ idVerified }) => (
  idVerified ? <IdVerified /> : <IdUnverified />
);

IdVerification.propTypes = {
  idVerified: PropTypes.bool.isRequired
};

export default IdVerification;