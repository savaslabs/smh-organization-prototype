import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const Sidebar = (props) => {
  const { member } = props;

  return (
    <div className="member-sidebar col-md-3">
      <img src="/avatar.png" alt={member.name} className="member-avatar"/>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

Sidebar.propTypes = {
  member: PropTypes.object.isRequired
};

export default Sidebar;
