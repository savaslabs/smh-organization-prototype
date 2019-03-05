import React  from 'react';
import Button from 'react-bootstrap/Button';

import Tile from '../../../components/Tile';
import Alert from '../../../components/Alert'
import alerts from "../../../data/alerts";

const RecentAlerts = () => (
  <div className="recent-alerts col-md-6 pr-4 pl-4">
    <h2 className="text-center mb-3">Notifications</h2>
    {alerts.map((alert, index) =>
      <Tile key={index}>
        <Alert alert={alert} />
      </Tile>
    )}
    <Button variant="primary" className="d-block mt-4 mx-auto">View All Notifications</Button>
  </div>
);

export default RecentAlerts;
