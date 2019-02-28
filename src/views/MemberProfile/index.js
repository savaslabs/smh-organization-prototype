import React, { Component } from 'react';

import PageHeading from './../../components/PageHeading';
import Sidebar from './../../components/Sidebar';
import MemberTabs from './../../components/MemberTabs';
import members from './../../data/members';

const PageHeaderVerifyId = ({ member, subtitle, onSelect }) => (
  <PageHeading
    title={member.name}
    subtitle={subtitle}
    ctaText='Verify Identity'
    ctaActiveTab='memberId'
    onSelect={onSelect}
  />
);

const PageHeaderRequestAccess = ({ member, subtitle, onSelect }) => (
  <PageHeading
    title={member.name}
    subtitle={subtitle}
    ctaText='Request Access'
    ctaActiveTab='requestAccess'
    onSelect={onSelect}
  />
);

const PageHeaderGeneral = ({ member, subtitle }) => (
  <PageHeading
    title={member.name}
    subtitle={subtitle}
  />
);

class MemberProfile extends Component {
  constructor(props) {
    super(props);

    const id = this.props.match.params.id;
    this.member = members[id];

    this.state = {
      active: 'MemberInfo',
      idVerified: this.member ? this.getInitialState('idVerified', id) : false,
      medVerified: this.member ? this.getInitialState('medVerified', id) : false,
      accessRecords: this.member ? this.getInitialState('accessRecords', id) : false,
    };

    this.onSelect = this.onSelect.bind(this);
    this.updateMemberState = this.updateMemberState.bind(this);
  }

  /**
   * Check local storage for data, otherwise look in hardcoded array of members.
   */
  getInitialState(item, id) {
    return sessionStorage.getItem(item + id) ? sessionStorage.getItem(item + id) : this.member[item];
  }

  /**
   * Set active nav item, to be passed to tabs.
   */
  onSelect(active) {
    this.setState({ active: active });
  }

  /**
   * Add an item to sessionStorage to indicate step in verification processes.
   */
  updateMemberState = (id, item) => {
    sessionStorage.setItem(item + id, 'true');
    this.setState({ [item]: 'true' });
  };

  render() {
    const member = this.member;
    if (!member) {
      return (<p>404 Not Found</p>);
    }

    const { active, idVerified, medVerified, accessRecords } = this.state;
    const subtitle = member.gender + ' | ' + member.age;
    return (
      <div>
        {!idVerified && <PageHeaderVerifyId member={member} subtitle={subtitle} onSelect={this.onSelect}/>}
        {idVerified && !accessRecords && <PageHeaderRequestAccess member={member} subtitle={subtitle} onSelect={this.onSelect}/>}
        {idVerified && accessRecords && <PageHeaderGeneral member={member} subtitle={subtitle} />}

        <div className='container'>
          <div className='row'>
            <Sidebar
              member={member}
              accessRecords={accessRecords}
              onSelect={this.onSelect}
            />
            <MemberTabs
              member={member}
              active={active}
              idVerified={idVerified}
              medVerified={medVerified}
              accessRecords={accessRecords}
              updateMemberState={this.updateMemberState}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MemberProfile;
