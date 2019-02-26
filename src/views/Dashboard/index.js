import React, { Component } from 'react';

import PageHeading from './../../components/PageHeading';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <PageHeading title="Welcome back, Cheryl!" />
        <div className="container">
          <h2>Here is what you missed...</h2>
        </div>
      </div>
    );
  }
}

export default Dashboard;

