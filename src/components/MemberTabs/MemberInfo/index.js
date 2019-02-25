import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import BasicInfo from './BasicInfo';

const MemberInfo = ({ member }) => {
  return (
    <Tabs defaultActiveKey="basicInfo">
      <Tab eventKey="basicInfo" title="Basic Information">
        <BasicInfo member={member} />
      </Tab>
    </Tabs>
  );
};

MemberInfo.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberInfo;