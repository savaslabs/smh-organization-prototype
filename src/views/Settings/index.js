import React from "react";
import { Button } from "react-bootstrap"

const Settings = () => (
  <div className="row mr-0 ml-0">
    <div className="member-sidebar col-lg-3 pl-0 pb-5 pr-0">
      <div className="member-sidebar__image">
        <img src="/images/avatars/default.png" alt="Cheryl Deggins" className="member-avatar" />
      </div>
      <div className="member-sidebar__nav">
        <div className="member-sidebar__heading">
          <h1>Cheryl Deggins</h1>
        </div>
      </div>
    </div>
    <div className="member-tabs col-lg-9 p-5">
      <h2 className="member-tabs__title">User Settings</h2>
      <dl>
        <dt>Email</dt>
        <dd>cdeggins@gmail.com</dd>

        <dt>Phone Number</dt>
        <dd>(555) 555-5555</dd>

        <dt>Member Since</dt>
        <dd>02/13/2019</dd>
      </dl>
      <Button variant="primary" className="mt-4">Reset Password</Button>
    </div>
  </div>
);

export default Settings;
