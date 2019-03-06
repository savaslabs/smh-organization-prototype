import React from 'react';
import PropTypes from 'prop-types';

import BasicInfo from '../MemberInfo/BasicInfo';

const MemberLockbox = ({ member }) => (
  <div>
    <h2>Lockbox</h2>
    <BasicInfo member={member} />
  </div>
);

MemberLockbox.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberLockbox;