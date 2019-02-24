import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const MemberId = (props) => {
  const { member } = props;
  return (
    <Tabs defaultActiveKey="basicInfo">
      <Tab eventKey="basicInfo" title="Basic Information">
        <h2 className="sr-only sr-only-focusable">Basic Information</h2>
        <ul>
          <li><strong>First Name: </strong>{member.firstName}</li>
          <li><strong>Last Name: </strong>{member.lastName}</li>
          <li><strong>DOB: </strong>{member.dob}</li>
        </ul>

        <h3>Contact Information</h3>
        <ul>
          <li><strong>Email: </strong>{member.email}</li>
          <li><strong>Phone Number: </strong>{member.phone}</li>
          <li><strong>Address: </strong>{member.address}</li>
        </ul>

        <h3>Emergency Contact</h3>
        <ul>
          <li><strong>Name: </strong>{member.eContactName}</li>
          <li><strong>Phone: </strong>{member.eContactPhone}</li>
        </ul>

        <ul>
          <li><strong>Member Since: </strong>{member.joined}</li>
        </ul>
      </Tab>
    </Tabs>
  );
};

MemberId.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberId;