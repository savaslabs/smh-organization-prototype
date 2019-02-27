import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import BasicInfo from '../MemberInfo/BasicInfo';

const MemberLockbox = ({ member }) => {
  return (
    <Tabs defaultActiveKey="lockbox">
      <Tab eventKey="lockbox" title="Lockbox">
        <h2 className="sr-only sr-only-focusable">Lockbox</h2>
        <BasicInfo member={member} />
      </Tab>
    </Tabs>
  );
};

MemberLockbox.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberLockbox;