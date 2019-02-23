import React from 'react';
import PropTypes from 'prop-types';
import MemberInfo from './../../components/MemberTabs/MemberInfo';

const MemberTabs = (props) => {
  return (
    <div className="member-tabs col-md-9">
      <MemberInfo member={props.member} />
    </div>
  );
};

MemberTabs.propTypes = {
  member: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
};

export default MemberTabs;