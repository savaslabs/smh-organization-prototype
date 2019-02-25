import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import Records from './Records';
import DataSources from './DataSources';
import AddSource from './AddSource';

const MemberRecords = ({ member }) => {
  return (
    <Tabs defaultActiveKey="records">
      <Tab eventKey="records" title="Records">
        <h2 className="sr-only sr-only-focusable">Records</h2>
        <Records />
      </Tab>
      <Tab eventKey="sources" title="Data Sources">
        <h2 className="sr-only sr-only-focusable">Data Sources</h2>
        <DataSources />
      </Tab>
      <Tab eventKey="addSource" title="Add Data Source">
        <h2 className="sr-only sr-only-focusable">Add Data Source"</h2>
        <AddSource />
      </Tab>
    </Tabs>
  );
};

MemberRecords.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberRecords;