import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const Sidebar = ({ member, accessRecords, onSelect }) => {
  return (
    <div className="member-sidebar col-md-3">
      <img src="/images/avatar.png" alt={member.name} className="member-avatar"/>
      <Nav defaultActiveKey="memberInfo" className="flex-column" onSelect={(active) => onSelect(active)}>
        <Nav.Link eventKey="memberInfo">Basic Information</Nav.Link>
        <Nav.Link eventKey="memberId">Identification</Nav.Link>
        {accessRecords &&
          <div>
            <Nav.Link eventKey="memberRecords">Records</Nav.Link>
            <Nav.Link eventKey="memberNotes">Notes</Nav.Link>
            <Nav.Link eventKey="memberLockbox">Lockbox</Nav.Link>
          </div>
        }
      </Nav>
    </div>
  );
};

Sidebar.propTypes = {
  member: PropTypes.object.isRequired,
  accessRecords: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onSelect: PropTypes.func.isRequired
};

export default Sidebar;
