import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const Sidebar = ({ member, idVerified, onSelect }) => {
  const image = member.profileImage ? member.profileImage : '/images/avatars/default.png';
  const tabTitle = idVerified ? 'Identification' : 'Verify Identification';

  return (
    <div className="member-sidebar col-md-3">
      <div className="member-sidebar__image">
        <img src={image} alt={member.name} className="member-avatar"/>
        {idVerified &&
        <p className="member-avatar__overlay mb-0">
          <img src="/images/icons/star.png" alt="" />
          ID Verified
        </p>
      }
      </div>
      <div className="member-sidebar__nav">
        <div className="member-sidebar__heading">
          <h1>{member.name}</h1>
          {idVerified &&
          <p>{member.gender} <span className="mr-2 ml-2">·</span> Age {member.age}</p>
          }
        </div>

        <Nav defaultActiveKey="memberInfo" className="flex-column" onSelect={(active) => onSelect(active)}>
          <Nav.Link eventKey="memberInfo">Basic Information</Nav.Link>
          <Nav.Link eventKey="memberId">{tabTitle}</Nav.Link>
          {idVerified &&
            <div>
              <Nav.Link eventKey="memberRecords">Medical Data</Nav.Link>
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
  onSelect: PropTypes.func.isRequired
};

export default Sidebar;
