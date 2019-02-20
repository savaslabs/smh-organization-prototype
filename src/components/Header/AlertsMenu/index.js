import React, { Component } from 'react';
import Alerts from './../../../data/alerts';

class AlertsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="menu--alerts">
        <button className="menu--alerts__icon" onClick={this.toggleState}>
          Icon
        </button>
        {this.state.open &&
          <div className="menu--alerts__list">
            <ul className="alerts">
              {Alerts.map(alert =>
                <li className="alert">
                  <p className="alert__text">{alert.alert}</p>
                  {alert.time && <p className="alert__time">{alert.time}</p>}
                  {alert.action && <p className="alert__action">{alert.action}</p>
                  }
                </li>
              )}
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default AlertsMenu;
