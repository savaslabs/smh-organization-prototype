import React from "react";
import PropTypes from "prop-types";
import { Form, Table, Button } from "react-bootstrap";

const MemberLockbox = () => (
  <div>
    <div className="heading-with-sort d-flex justify-content-between align-items-center pb-2">
      <h2>Lockbox</h2>
      <Form className="mb-2" inline>
        <Form.Group controlId="sortOption">
          <Form.Label className="mr-2 mb-0">Sort by</Form.Label>
          <Form.Control as="select">
            <option>Most Recent</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
    <Table hover responsive className="table--records">
      <thead>
        <tr>
          <th>File</th>
          <th>Uploaded By</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="modal-link">Driver's License</td>
          <td className="modal-link">Cheryl Deggins</td>
          <td>03/04/2019</td>
        </tr>
        <tr>
          <td className="modal-link">Medicare ID Card</td>
          <td className="modal-link">Cheryl Deggins</td>
          <td>03/04/2019</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="primary" className="mt-5">
      Upload File
    </Button>
  </div>
);

MemberLockbox.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberLockbox;
