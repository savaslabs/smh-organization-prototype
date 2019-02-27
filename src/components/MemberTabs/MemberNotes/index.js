import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import Notes from './Notes';

const MemberNotes = ({member}) => {
  return (
    <Tabs defaultActiveKey="notes">
      <Tab eventKey="notes" title="Notes">
        <h2 className="sr-only sr-only-focusable">Notes</h2>
        <Notes member={member}/>
      </Tab>
    </Tabs>
  );
};

MemberNotes.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberNotes;