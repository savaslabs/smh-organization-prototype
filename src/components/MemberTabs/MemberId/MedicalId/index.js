import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Row, Col } from "react-bootstrap";

/**
 * Step 2 in the ID verification process.
 */
const MedicalId = ({ goToTab }) => (
  <Form className="form--med-id form--limit-width mt-5 pt-5">
    <Row>
      <Col>
        <Form.Group controlId="verifyMedId">
          <Form.Label>Medical ID Number</Form.Label>
          <Form.Control type="text" placeholder="5A5-5A-5A5A-AA" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="medIdType" className="mb-4">
          <Form.Label>ID Type</Form.Label>
          <Form.Control as="select">
            <option>Medicare</option>
            <option>Medicaid</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
    <Form.Group controlId="verifySsn" className="form--med-id__ssn mb-5">
      <Form.Label>Social Security Number</Form.Label>
      <Form.Control type="text" placeholder="555-55-5555" />
    </Form.Group>
    <div className="text-center">
      <Button
        variant="primary"
        type="submit"
        onClick={e => goToTab(e, "verify")}
      >
        Next
      </Button>
    </div>
  </Form>
);

MedicalId.propTypes = {
  goToTab: PropTypes.func.isRequired
};

export default MedicalId;
