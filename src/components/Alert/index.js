import React from 'react';
import PropTypes from 'prop-types';

/**
 * A single notification.
 */
const Alert = ({ alert }) => (
  <div className="alert-item">
    <img src={alert.image} alt="" className="alert-item__image"/>
    <div>
      <div className="alert-item__text">{alert.alert}</div>
      {alert.time &&
      <div className="alert-item__time">{alert.time}</div>
      }
      {alert.action &&
      <div className="alert-item__action">{alert.action}</div>
      }
    </div>
  </div>
);

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;
