import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const MemberRecords = (props) => {
  // const { member } = props;
  return (
    <Tabs defaultActiveKey="Records">
      <Tab eventKey="basicInfo" title="Records">
        Records
      </Tab>
    </Tabs>
  );
};

MemberRecords.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberRecords;