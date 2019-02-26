import React  from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentBlock from '../../../components/ContentBlock';
import members from '../../../data/members';

const RecentMembers = () => {
  const recentMembers = members.reverse().slice(0, 3);
  return (
    <ContentBlock title='Recent Members' icon='clock' link='/search'>
      <ul>
        {recentMembers.map((member, index) =>
          <li key={index}>
            <FontAwesomeIcon icon={['far', 'user-circle']} />
            <Link to={'/member/' + member.id}>{member.name}</Link>
          </li>
        )}
      </ul>
    </ContentBlock>
  );
};

export default RecentMembers;
