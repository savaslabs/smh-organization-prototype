import React  from 'react';

import UserLink from './../../../components/UserLink';
import members from '../../../data/members';

const RecentMembers = () => {
  const recentMembers = Object.assign([], members).reverse().slice(0, 3);
  return (
    <div className="recent-members col-md-6 pr-4 pl-4">
      <h2 className="text-center mb-3 pb-3">Recently Viewed Members</h2>
      <ul className='list--formatted'>
        {recentMembers.map((member, index) =>
          <UserLink key={index} user={member}/>
        )}
      </ul>
    </div>
  );
};

export default RecentMembers;
