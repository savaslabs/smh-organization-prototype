import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

/**
 * Step 1 in the ID verification process.
 */
const IdVerification = ({ goToTab }) => (
  <Form className="form--limit-width mt-5 pt-5">
    <Form.Group controlId="verifyIdType" className="mb-4">
      <Form.Label>Document Type</Form.Label>
      <Form.Control as="select">
        <option>Driver's License</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="verifyExpiration" className="mb-4">
      <Form.Label>Expiration Date</Form.Label>
      <Form.Control type="text" placeholder="mm/dd/yyyy" />
    </Form.Group>
    <Form.Group controlId="verifyCertify" className="mb-5">
      <Form.Check
        type="checkbox"
        label="I certify that I can verify this member’s identity."
      />
    </Form.Group>
    <div className="text-center">
      <Button
        variant="primary"
        type="submit"
        onClick={e => goToTab(e, "medicalId")}
      >
        Next
      </Button>
    </div>
  </Form>
);

IdVerification.propTypes = {
  goToTab: PropTypes.func.isRequired
};

export default IdVerification;
