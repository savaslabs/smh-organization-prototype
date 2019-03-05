import React, { Component } from 'react';

import RecentAlerts from './RecentAlerts';
import RecentMembers from './RecentMembers';

class Dashboard extends Component {
  render () {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <RecentAlerts />
          <RecentMembers />
        </div>
      </div>
    );
  }
}

export default Dashboard;

