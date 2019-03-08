import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const Note = ({ date, note, user, userOrg }) => {
  return (
    <div className="note mb-5">
      <Table hover className="table--records mt-2">
        <thead>
        <tr>
          <th>Agent Name</th>
          <th>Organization</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="modal-link">{user}</td>
          <td>{userOrg}</td>
          <td>{date}</td>
        </tr>
        </tbody>
      </Table>
      <p className="note__content pl-3">{note}</p>
    </div>
  );
};

Note.propTypes = {
  date: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  userOrg: PropTypes.string.isRequired
};

export default Note;
