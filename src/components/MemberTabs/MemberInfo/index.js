import React from 'react';
import PropTypes from 'prop-types';

import BasicInfo from './BasicInfo';

const MemberInfo = ({ member }) => (
  <div>
    <h2>Basic Information</h2>
    <BasicInfo member={member} />
  </div>
);

MemberInfo.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberInfo;