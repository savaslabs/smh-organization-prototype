import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

import Tile from "../../../Tile";
import Note from "../../Note";
import ActiveRecord from "../ActiveRecord";
import records from "../../../../data/records";

class Summary extends Component {
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

    const summaryRecords = records.slice(0, 2);
    return (
      <div>
        <h2 className="member-tabs__title mt-5">Summary</h2>
        <div className="tile-flex justify-content-start mt-3 mb-5">
          {summaryRecords.map((record, key) => (
            <Tile
              key={key}
              className={
                "tile-flex__item" + (record.disabled ? " disabled" : "")
              }
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
        <div className="heading-with-sort d-flex justify-content-between align-items-center pb-2 mb-3">
          <h2>Recent Notes</h2>
          <Form className="mb-2" inline>
            <Form.Group controlId="sortOption">
              <Form.Label className="mr-2 mb-0">Sort by</Form.Label>
              <Form.Control as="select">
                <option>Most Recent</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        <Note
          date="2/26/2019"
          note={
            this.props.member.firstName +
            " visited today to have a general exam."
          }
          user="Cheryl Deggins"
          userOrg="Trinity Health"
        />
      </div>
    );
  }
}

Summary.propTypes = {
  member: PropTypes.object.isRequired
};

export default Summary;
