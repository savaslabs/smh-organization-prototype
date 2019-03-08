import React from "react";
import Button from "react-bootstrap/Button";

import UserLink from "./../../../components/UserLink";
import members from "../../../data/members";

const RecentMembers = () => {
  // Form array of members for whom we have large avatar images.
  const recentMembers = [
    members[13],
    members[14],
    members[17],
    members[20],
    members[7],
    members[9],
    members[12]
  ];
  return (
    <div className="recent-members col-md-6 pr-4 pl-4">
      <h2 className="text-center mb-3 pb-3">Recently Viewed Members</h2>
      <ul className="list--formatted">
        {recentMembers.map((member, index) => (
          <UserLink key={index} user={member} />
        ))}
      </ul>
      <div className="text-center">
        <Button variant="primary" className="mt-4" href="/search">
          View All Members
        </Button>
      </div>
    </div>
  );
};

export default RecentMembers;
