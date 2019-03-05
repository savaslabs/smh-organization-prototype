/* eslint-disable default-case */

import React from 'react';
import PropTypes from 'prop-types';

import MemberInfo from './../../components/MemberTabs/MemberInfo';
import MemberId from './../../components/MemberTabs/MemberId';
import MemberRecords from './../../components/MemberTabs/MemberRecords';
import MemberNotes from './../../components/MemberTabs/MemberNotes';
import MemberLockbox from './../../components/MemberTabs/MemberLockbox';
import RequestAccess from './../../components/MemberTabs/RequestAccess';

const MemberTabs = (props) => {
  const { member, active, idVerified, medVerified, accessRecords, updateMemberState } = props;

  const activeTab = (active) => {
    switch(active) {
      case 'memberId':
        return <MemberId
          member={member}
          idVerified={idVerified}
          medVerified={medVerified}
          updateMemberState={updateMemberState}
        />;
      case 'memberRecords':
        return <MemberRecords member={member} />;
      case 'memberNotes':
        return <MemberNotes member={member} />;
      case 'memberLockbox':
        return <MemberLockbox member={member} />;
      case 'requestAccess':
        return (
        <RequestAccess
          member={member}
          accessRecords={accessRecords}
          updateMemberState={updateMemberState}
        />
      );
      default:
        return <MemberInfo member={member} />;
    }
  };

  return (
    <div className="member-tabs col-md-9 p-5">
      {activeTab(active)}
    </div>
  );
};

MemberTabs.propTypes = {
  member: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
  idVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  medVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  accessRecords: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  updateMemberState: PropTypes.func.isRequired,
};

export default MemberTabs;