import React, { Component } from "react";

import Tile from "../../../Tile";
import ActiveRecord from "../ActiveRecord";
import records from "../../../../data/records";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecord: null
    };

    this.onClick = this.onClick.bind(this);
    this.back = this.back.bind(this);
  }

  onClick(record) {
    this.setState({ activeRecord: record });
  }

  back() {
    this.setState({ activeRecord: null });
  }

  render() {
    const { activeRecord } = this.state;
    if (activeRecord) {
      return <ActiveRecord record={activeRecord} back={this.back} />;
    }

    return (
      <div className="tile-flex mt-5">
        {records.map((record, key) => (
          <Tile
            key={key}
            className={"tile-flex__item" + (record.disabled ? " disabled" : "")}
            onClick={() => this.onClick(record)}
          >
            <img src={"/images/icons/" + record.icon + ".png"} alt="" />
            <p>
              {record.name}
              {record.number && <span> ({record.number})</span>}
            </p>
          </Tile>
        ))}
      </div>
    );
  }
}

export default Records;
