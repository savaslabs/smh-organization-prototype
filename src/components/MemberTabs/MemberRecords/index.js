import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";

import Summary from "./Summary";
import Records from "./Records";
import Providers from "./Providers";
import DataSources from "./DataSources";

const MemberRecords = ({ member }) => (
  <Tabs defaultActiveKey="summary" className="records-tabs">
    <Tab eventKey="summary" title="Summary">
      <h2 className="sr-only sr-only-focusable">Summary</h2>
      <Summary member={member} />
    </Tab>
    <Tab eventKey="records" title="Records">
      <h2 className="sr-only sr-only-focusable">Records</h2>
      <Records />
    </Tab>
    <Tab eventKey="addSource" title="Providers">
      <h2 className="sr-only sr-only-focusable">Providers"</h2>
      <Providers />
    </Tab>
    <Tab eventKey="sources" title="Data Sources">
      <h2 className="sr-only sr-only-focusable">Data Sources</h2>
      <DataSources />
    </Tab>
  </Tabs>
);

MemberRecords.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberRecords;
