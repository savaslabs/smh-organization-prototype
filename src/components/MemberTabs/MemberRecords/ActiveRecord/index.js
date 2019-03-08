import React from "react";
import PropTypes from "prop-types";

import Diagnoses from "../Diagnoses";
import Prescriptions from "../Prescriptions";

const ActiveRecord = ({ record, back }) => {
  const getActiveRecord = () => {
    switch (record.name) {
      case "Diagnoses":
        return <Diagnoses />;
      case "Prescriptions":
        return <Prescriptions />;
      default:
        return <p>Record not found</p>;
    }
  };

  const activeRecord = getActiveRecord();
  return (
    <div>
      <div className="record-heading-wrapper d-flex justify-content-between align-items-center pt-5 pb-2 mb-3">
        <h2 className="m-0">{record.name}</h2>
        <button onClick={back} className="button--reset">
          <img src="/images/icons/arrow-back.png" alt="" className="mr-2" />
          Go back to records
        </button>
      </div>
      {activeRecord}
    </div>
  );
};

ActiveRecord.propTypes = {
  record: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired
};

export default ActiveRecord;
