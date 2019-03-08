import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Sidebar from "./../../components/Sidebar";
import MemberTabs from "./../../components/MemberTabs";
import members from "./../../data/members";

class MemberProfile extends Component {
  constructor(props) {
    super(props);

    // Get member ID from URL query param.
    const id = this.props.match.params.id;

    this.state = {
      id: id,
      active: "MemberInfo",
      idVerified: MemberProfile.getInitialState(id)
    };

    this.onSelect = this.onSelect.bind(this);
    this.verifyMember = this.verifyMember.bind(this);
  }

  /**
   * Update component if member ID in URL changes.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.id) {
      const id = nextProps.match.params.id;
      return {
        id: id,
        active: "MemberInfo",
        idVerified: MemberProfile.getInitialState(id)
      };
    }

    return null;
  }

  /**
   * Check local storage for data, otherwise look in hardcoded array of members.
   */
  static getInitialState(id) {
    const member = members[id];
    if (member) {
      return sessionStorage.getItem("idVerified" + id)
        ? sessionStorage.getItem("idVerified" + id)
        : member["idVerified"];
    }

    return false;
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
  verifyMember = id => {
    sessionStorage.setItem("idVerified" + id, "true");
    this.setState({ idVerified: "true" });
  };

  render() {
    if (this.props.auth !== "true") {
      return <Redirect to="/" />;
    }

    const { id, active, idVerified } = this.state;
    const member = members[id];
    if (!member) {
      return <p>404 Not Found</p>;
    }

    return (
      <div className="row">
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
    );
  }
}

MemberProfile.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default MemberProfile;
