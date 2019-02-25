import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import BasicInfo from '../MemberInfo/BasicInfo';

const MemberLockbox = ({ member }) => {
  return (
    <Tabs defaultActiveKey="lockbox">
      <Tab eventKey="lockbox" title="Lockbox">
        <BasicInfo member={member} />
      </Tab>
    </Tabs>
  );
};

MemberLockbox.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberLockbox;