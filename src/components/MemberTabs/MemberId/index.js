import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import IdVerification from "./IdVerification";
import MedicalId from './MedicalId';

const MemberId = ({ member, idVerified, medVerified, updateMemberState }) => {
  return (
    <Tabs defaultActiveKey="idVerification">
      <Tab eventKey="idVerification" title="ID Verification">
        <h2 className="sr-only sr-only-focusable">ID Verification</h2>
        <IdVerification
          memberId={member.id}
          idVerified={idVerified}
          updateMemberState={updateMemberState}
        />
      </Tab>
      <Tab eventKey="medicalId" title="Medical ID">
        <h2 className="sr-only sr-only-focusable">Medical ID</h2>
        <MedicalId
          memberId={member.id}
          medVerified={medVerified}
          updateMemberState={updateMemberState}
        />
      </Tab>
    </Tabs>
  );
};

MemberId.propTypes = {
  member: PropTypes.object.isRequired,
  idVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  medVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  updateMemberState: PropTypes.func.isRequired
};

export default MemberId;