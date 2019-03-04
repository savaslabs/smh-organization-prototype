import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';

import alerts from './../../../data/alerts';

const AlertsMenu = () => {
  return (
    <NavDropdown
      title={<img src="/images/icons/bell.png" alt="Notifications menu icon" />}
      className="alerts"
    >
      <h2>Recent Notifications</h2>
      {alerts.map((alert, index) =>
        <Navbar.Text key={index}>
          <img src={alert.image} alt="" />
          <div>
            <p className="alert-item__text">{alert.alert}</p>
            {alert.time &&
              <p className="alert-item__time">{alert.time}</p>
            }
            {alert.action &&
              <p className="alert-item__action">{alert.action}</p>
            }
          </div>
        </Navbar.Text>
      )}
    </NavDropdown>
  );
};

export default AlertsMenu;
