import React, { Component } from 'react';
import PageHeading from './../../components/PageHeading';
import Sidebar from './../../components/Sidebar';
import MemberTabs from './../../components/MemberTabs';
import members from './../../data/members';

class MemberProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'MemberInfo',
      verified: false
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (active) => {
    this.setState({
      active: active
    });
  };

  render() {
    const id = this.props.match.params.id;
    const member = members[id];

    if (!member) {
      return (
        <p>404 Not Found</p>
      )
    }

    const { active, verified } = this.state;
    const subtitle = member.gender + ' | ' + member.age;
    return (
      <div>
        <PageHeading
          title={member.name}
          subtitle={subtitle}
          ctaLink={'/member/' + id + 'verify'}
          ctaText="Verify Identity"
        />
        <div className="container">
          <div className="row">
            <Sidebar member={member} onSelect={this.onSelect}/>
            <MemberTabs member={member} active={active} verified={verified} />
          </div>
        </div>
      </div>
    );
  }
}

export default MemberProfile;
