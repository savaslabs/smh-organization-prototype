import React from 'react';

const Alert = ({ alert }) => (
  <div className="alert-item">
    <img src={alert.image} alt="" className="alert-item__image"/>
    <div>
      <p className="alert-item__text">{alert.alert}</p>
      {alert.time &&
      <p className="alert-item__time">{alert.time}</p>
      }
      {alert.action &&
      <p className="alert-item__action">{alert.action}</p>
      }
    </div>
  </div>
);

export default Alert;
