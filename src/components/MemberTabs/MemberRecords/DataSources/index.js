import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import dataSources from '../../../../data/dataSources';

const DataSources = () => (
  <div>
    <h3>Current Data Sources</h3>
    <Table striped bordered>
      <thead>
        <tr>
          <th>Data Source Name</th>
          <th>Data Type</th>
          <th>Date Imported</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {dataSources.map(source =>
        <tr>
          <td>{source.name}</td>
          <td>{source.dataType}</td>
          <td>{source.dateImported}</td>
          <td><Button variant="light"><FontAwesomeIcon icon="times" /></Button></td>
        </tr>
      )}
      </tbody>
    </Table>
  </div>
);

export default DataSources;
