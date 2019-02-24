import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import IdVerification from "./IdVerification";
import MedicalId from './MedicalId';

const MemberId = ({ member, idVerified, medVerified }) => {
  return (
    <Tabs defaultActiveKey="idVerification">
      <Tab eventKey="idVerification" title="ID Verification">
        <h2 className="sr-only sr-only-focusable">ID Verification</h2>
        <IdVerification idVerified={idVerified} />
      </Tab>
      <Tab eventKey="medicalId" title="Medical ID">
        <h2 className="sr-only sr-only-focusable">Medical ID</h2>
        <MedicalId medVerified={medVerified} />
      </Tab>
    </Tabs>
  );
};

MemberId.propTypes = {
  member: PropTypes.object.isRequired,
  idVerified: PropTypes.bool.isRequired,
  medVerified: PropTypes.bool.isRequired
};

export default MemberId;