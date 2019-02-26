import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import addSources from "../../../../data/addSources";

const AddSource = () => (
  <div>
    <Form inline className="mb-3 form--search">
      <FontAwesomeIcon icon="search" />
      <Form.Control type="text" placeholder="Search data sources" />
      <Button type="submit">Search</Button>
    </Form>
    <h3>All Available Data Sources</h3>
    <Form>
      <Table striped bordered>
        <thead>
        <tr>
          <th>Data Source Name</th>
          <th>Data Type</th>
          <th>Import</th>
        </tr>
        </thead>
        <tbody>
        {addSources.map((source, key) =>
          <tr key={key}>
            <td>{source.name}</td>
            <td>{source.dataType}</td>
            <td>
              <Form.Group controlId={key}>
                <Form.Check type="checkbox" label="Import" className="label--hidden"/>
              </Form.Group>
            </td>
          </tr>
        )}
        </tbody>
      </Table>
      <Button variant="primary" type="submit">
        Import Selected
      </Button>
    </Form>
  </div>
);

export default AddSource;
