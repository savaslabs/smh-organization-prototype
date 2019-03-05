import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const Sidebar = ({ member, idVerified, accessRecords, onSelect }) => {
  const image = member.profileImage ? member.profileImage : '/images/avatars/default.png';
  const tabTitle = idVerified ? 'Identification' : 'Verify Identification';

  return (
    <div className="member-sidebar col-md-3">
      <img src={image} alt={member.name} className="member-avatar"/>
      <div className="member-sidebar__nav">
        <h1>{member.name}</h1>
        <Nav defaultActiveKey="memberInfo" className="flex-column" onSelect={(active) => onSelect(active)}>
          <Nav.Link eventKey="memberInfo">Basic Information</Nav.Link>
          <Nav.Link eventKey="memberId">{tabTitle}</Nav.Link>
          {accessRecords &&
            <div>
              <Nav.Link eventKey="memberRecords">Records</Nav.Link>
              <Nav.Link eventKey="memberNotes">Notes</Nav.Link>
              <Nav.Link eventKey="memberLockbox">Lockbox</Nav.Link>
            </div>
          }
        </Nav>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  member: PropTypes.object.isRequired,
  idVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  accessRecords: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onSelect: PropTypes.func.isRequired
};

export default Sidebar;
