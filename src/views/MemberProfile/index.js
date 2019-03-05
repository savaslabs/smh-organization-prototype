import React, { Component } from 'react';

import Sidebar from './../../components/Sidebar';
import MemberTabs from './../../components/MemberTabs';
import members from './../../data/members';

class MemberProfile extends Component {
  constructor(props) {
    super(props);

    const id = this.props.match.params.id;
    this.member = members[id];

    this.state = {
      active: 'MemberInfo',
      idVerified: this.member ? this.getInitialState('idVerified', id) : false
    };

    this.onSelect = this.onSelect.bind(this);
    this.verifyMember = this.verifyMember.bind(this);
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
  verifyMember = (id) => {
    sessionStorage.setItem('idVerified' + id, 'true');
    this.setState({ idVerified: 'true' });
  };

  render() {
    const member = this.member;
    if (!member) {
      return (<p>404 Not Found</p>);
    }

    const { active, idVerified } = this.state;
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <Sidebar
              member={member}
              idVerified={idVerified}
              onSelect={this.onSelect}
            />
            <MemberTabs
              member={member}
              active={active}
              idVerified={idVerified}
              verifyMember={this.verifyMember}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MemberProfile;
