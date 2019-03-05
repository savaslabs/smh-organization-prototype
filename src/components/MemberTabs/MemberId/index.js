import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IdVerification from "./IdVerification";
import MedicalId from './MedicalId';
import SubmitVerification from "./SubmitVerification";

const TabTitle = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <hr />
    <FontAwesomeIcon icon="circle" size="lg"/>
  </div>
);

class MemberId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.idVerified === 'true' ? 'verify' : 'idVerification'
    };
    this.goToTab = this.goToTab.bind(this);
  }

  goToTab(e, tab) {
    e.preventDefault();
    this.setState({ key: tab });
  }

  render() {
    const { member, idVerified, verifyMember } = this.props;
    const { key } = this.state;

    return (
      <Tabs activeKey={key} className="verify-form__tabs">
        <Tab eventKey="idVerification" title={<TabTitle title="ID Verification" />}>
          <IdVerification goToTab={this.goToTab} />
        </Tab>
        <Tab eventKey="medicalId" title={<TabTitle title="Medical ID" />}>
          <MedicalId goToTab={this.goToTab} />
        </Tab>
        <Tab eventKey="verify" title={<TabTitle title="Verify" />}>
          <SubmitVerification
            memberId={member.id}
            idVerified={idVerified}
            verifyMember={verifyMember}
          />
        </Tab>
      </Tabs>
    );
  }
}

MemberId.propTypes = {
  member: PropTypes.object.isRequired,
  idVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  verifyMember: PropTypes.func.isRequired
};

export default MemberId;