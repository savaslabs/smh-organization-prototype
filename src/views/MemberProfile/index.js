import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

import Sidebar from './../../components/Sidebar';
import MemberTabs from './../../components/MemberTabs';
import members from './../../data/members';

class MemberProfile extends Component {
  constructor(props) {
    super(props);

    // Get member ID from URL query param.
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
   * Set active nav item, to be passed to member tabs.
   */
  onSelect(active) {
    this.setState({ active: active });
  }

  /**
   * Add an item to sessionStorage to show member as ID-verified.
   */
  verifyMember = (id) => {
    sessionStorage.setItem('idVerified' + id, 'true');
    this.setState({ idVerified: 'true' });
  };

  render() {
    if (this.props.auth !== 'true') {
      return <Redirect to="/" />;
    }

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

MemberProfile.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default MemberProfile;
