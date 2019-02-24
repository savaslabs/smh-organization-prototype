import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const MemberLockbox = (props) => {
  // const { member } = props;
  return (
    <Tabs defaultActiveKey="lockbox">
      <Tab eventKey="lockbox" title="Lockbox">
        <h2 className="sr-only sr-only-focusable">Lockbox</h2>
        lockbox
      </Tab>
    </Tabs>
  );
};

MemberLockbox.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberLockbox;