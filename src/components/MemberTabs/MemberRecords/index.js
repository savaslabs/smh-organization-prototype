import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import Records from "./Records";
import Providers from "./Providers";
import DataSources from "./DataSources";

const MemberRecords = () => (
  <Tabs defaultActiveKey="records" className="records-tabs">
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

export default MemberRecords;
