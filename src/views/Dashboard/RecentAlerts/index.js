import React from "react";
import Button from "react-bootstrap/Button";

import Tile from "../../../components/Tile";
import Alert from "../../../components/Alert";
import alerts from "../../../data/alerts";

const RecentAlerts = () => (
  <div className="recent-alerts col-md-6 pr-4 pl-4">
    <h2 className="text-center mb-3">Notifications</h2>
    {alerts.map((alert, index) => (
      <Tile key={index}>
        <Alert alert={alert} />
      </Tile>
    ))}
    <div className="text-center">
      <Button variant="primary" className="mt-4">
        View All Notifications
      </Button>
    </div>
  </div>
);

export default RecentAlerts;
