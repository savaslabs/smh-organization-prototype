import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

/**
 * Column of ID Verification info displayed on this pane.
 */
const IdInfo = idVerified => {
  const now = new Date();
  const date = now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear();

  return (
    <div className="col-sm-6">
      <h2 className="member-tabs__title">ID Verification</h2>
      <dl>
        <dt>Document Type</dt>
        <dd>Driver's License</dd>
        <dt>Expiration Date</dt>
        <dd>09/23/2022</dd>
        {idVerified && (
          <React.Fragment>
            <dt>Verification Details</dt>
            <dd>
              Cheryl Deggins (Trinity Health) verified this member's identity on{" "}
              {date}
            </dd>
          </React.Fragment>
        )}
      </dl>
    </div>
  );
};

/**
 * Column of Medical ID info displayed on this pane.
 */
const MedInfo = () => (
  <div className="col-sm-6">
    <h2 className="member-tabs__title">Medical ID</h2>
    <dl>
      <dt>Medicaid/Medicare ID</dt>
      <dd>5A5-5A-5A5A-AA</dd>
      <dt>Social Security Number</dt>
      <dd>xxx-xx-5555</dd>
    </dl>
  </div>
);

const SubmitForm = ({ memberId, verifyMember }) => {
  const onClick = e => {
    e.preventDefault();
    verifyMember(memberId);
  };

  return (
    <Fragment>
      <p className="text-center font-italic mt-5 mb-5">
        Review the information before submitting:
      </p>
      <div className="row">
        <IdInfo idVerified={false} />
        <MedInfo />
      </div>
      <div className="text-center">
        <Button
          variant="primary"
          type="submit"
          onClick={e => onClick(e)}
          className="mt-5"
        >
          Submit Verification
        </Button>
      </div>
    </Fragment>
  );
};

const SubmitComplete = () => (
  <Fragment>
    <p className="verify-form__submit__success font-italic mt-5 mb-5">
      Member has been verified!
    </p>
    <div className="row">
      <IdInfo idVerified={true} />
      <MedInfo />
    </div>
  </Fragment>
);

/**
 * Display submit form pre-ID verification, then display "verified!" pane.
 */
const SubmitVerification = ({ memberId, idVerified, verifyMember }) => (
  <div className="verify-form__submit">
    {idVerified === "true" ? (
      <SubmitComplete />
    ) : (
      <SubmitForm memberId={memberId} verifyMember={verifyMember} />
    )}
  </div>
);

SubmitVerification.propTypes = {
  memberId: PropTypes.number.isRequired,
  idVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  verifyMember: PropTypes.func.isRequired
};

export default SubmitVerification;
