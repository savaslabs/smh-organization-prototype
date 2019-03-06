import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

import RecentAlerts from './RecentAlerts';
import RecentMembers from './RecentMembers';

const Dashboard = ({ auth }) => {
  if (auth !== 'true') {
    return <Redirect to="/" />;
}
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <RecentAlerts />
        <RecentMembers />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default Dashboard;

