import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';

const RequestForm = ({ member, idVerified, updateMemberState }) => {
  const onClick = (e) => {
    e.preventDefault();
    updateMemberState(member.id, 'accessRecords')
  };

  return (
    <Form className='mb-3'>
      <Form.Group controlId='newNote'>
        <Form.Label>Note to {member.name}</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => onClick(e)}>
        Send Request
      </Button>
    </Form>
  );
};

const RequestComplete = () => {
  const now = new Date();
  const date = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
  return (
    <div>
      <h3>Request Sent!</h3>
      <p>{date}</p>
      <p>Send Request Reminder</p>
      <p>Cancel Request</p>
    </div>
  );
};

const RequestAccess = ({ member, accessRecords, updateMemberState }) => {
  const content = accessRecords ? <RequestComplete /> : <RequestForm member={member} idVerified={accessRecords} updateMemberState={updateMemberState}/>;
  return (
    <Tabs defaultActiveKey="requestAccess">
      <Tab eventKey="requestAccess" title="Request Access">
        <h2 className="sr-only sr-only-focusable">Request Access</h2>
        {content}
      </Tab>
    </Tabs>
  );
};

RequestAccess.propTypes = {
  member: PropTypes.object.isRequired,
  medVerified: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  updateMemberState: PropTypes.func.isRequired
};

export default RequestAccess;