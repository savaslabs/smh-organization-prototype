import React from 'react';
import PageHeading from './../../components/PageHeading';
import members from './../../data/members';

const MemberProfile = ({ match }) => {
  const id = match.params.id;
  const member = members[id];
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
        <h1>ID: {match.params.id}</h1>
      </div>
    </div>
  );
};

export default MemberProfile;
