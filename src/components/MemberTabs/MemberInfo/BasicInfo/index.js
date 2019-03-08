import React from "react";
import PropTypes from "prop-types";

const BasicInfo = ({ member }) => (
  <dl>
    <dt>Birthdate</dt>
    <dd>{member.dob}</dd>

    <dt>Email</dt>
    <dd>{member.email}</dd>

    <dt>Phone Number</dt>
    <dd>(555) 555-5555</dd>

    <dt>Address</dt>
    <dd>
      26 Fairway Blvd<br />Albany, NY
    </dd>

    <dt>Emergency Contact</dt>
    <dd>
      Stephanie Walters<br />(555) 555-5555
    </dd>

    <dt>Member Since</dt>
    <dd>{member.joined}</dd>
  </dl>
);

BasicInfo.propTypes = {
  member: PropTypes.object.isRequired
};

export default BasicInfo;
