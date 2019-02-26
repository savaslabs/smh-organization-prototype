import React from 'react';
import PropTypes from 'prop-types';

const BasicInfo = ({ member }) => (
  <div>
    <h2 className="sr-only sr-only-focusable">Basic Information</h2>
    <ul>
      <li><strong>First Name: </strong>{member.firstName}</li>
      <li><strong>Last Name: </strong>{member.lastName}</li>
      <li><strong>DOB: </strong>{member.dob}</li>
    </ul>

    <h3>Contact Information</h3>
    <ul>
      <li><strong>Email: </strong>{member.email}</li>
      <li><strong>Phone Number: </strong>555-555-5555</li>
      <li><strong>Address: </strong>26 Fairway Blvd, Albany, NY</li>
    </ul>

    <h3>Emergency Contact</h3>
    <ul>
      <li><strong>Name: </strong>Stephanie Walters</li>
      <li><strong>Phone: </strong>555-555-5555</li>
    </ul>

    <ul>
      <li><strong>Member Since: </strong>{member.joined}</li>
    </ul>
  </div>
);

BasicInfo.propTypes = {
  member: PropTypes.object.isRequired
};

export default BasicInfo;
