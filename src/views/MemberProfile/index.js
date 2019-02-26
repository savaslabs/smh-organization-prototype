import React, { Component } from 'react';
import PageHeading from './../../components/PageHeading';
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
      idVerified: this.member ? this.member.idVerified : null,
      medVerified: this.member ? this.member.medVerified : null,
      accessRecords: this.member ? this.member.accessRecords : null,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (active) => {
    this.setState({
      active: active
    });
  };

  render() {
    const member = this.member;

    if (!member) {
      return (
        <p>404 Not Found</p>
      )
    }

    const { active, idVerified, medVerified, accessRecords } = this.state;
    const subtitle = member.gender + ' | ' + member.age;
    return (
      <div>
        <PageHeading
          title={member.name}
          subtitle={subtitle}
          ctaLink={'/member/' + member.id + 'verify'}
          ctaText="Verify Identity"
        />
        <div className="container">
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
              medVerified={medVerified}
              accessRecords={accessRecords}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MemberProfile;
