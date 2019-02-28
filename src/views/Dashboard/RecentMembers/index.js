import React  from 'react';

import ContentBlock from '../../../components/ContentBlock';
import UserLink from './../../../components/UserLink';
import members from '../../../data/members';

const RecentMembers = () => {
  const recentMembers = Object.assign([], members).reverse().slice(0, 3);
  return (
    <ContentBlock title='Recent Members' icon='clock' link='/search'>
      <ul className='list--formatted'>
        {recentMembers.map((member, index) =>
          <UserLink key={index} item={member}/>
        )}
      </ul>
    </ContentBlock>
  );
};

export default RecentMembers;
