import React from 'react';

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

export default Alert;
