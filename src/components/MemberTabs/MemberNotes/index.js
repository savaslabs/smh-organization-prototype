import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const MemberNotes = (props) => {
  // const { member } = props;
  return (
    <Tabs defaultActiveKey="notes">
      <Tab eventKey="notes" title="Notes">
        <h2 className="sr-only sr-only-focusable">Basic Information</h2>
        Notes
      </Tab>
    </Tabs>
  );
};

MemberNotes.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberNotes;