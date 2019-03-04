import React, { Component } from 'react';

import RecentAlerts from './RecentAlerts';
import RecentMembers from './RecentMembers';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <h2>Here is what you missed...</h2>
          <RecentAlerts />
          <RecentMembers />
        </div>
      </div>
    );
  }
}

export default Dashboard;

