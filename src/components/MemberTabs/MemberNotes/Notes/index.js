import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button} from 'react-bootstrap';

import notes from '../../../../data/notes';

const Notes = ({member}) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="newNote">
          <Form.Label>Write a note about {member.name}</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <ul className="notes__list">
        {notes.map((note, index) =>
          <li key={index}>
            <p className="note__date">{note.date}</p>
            <p className="note__content">{note.note}</p>
            <p className="note__user">
              By {note.user} ({note.userOrg})
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

Notes.propTypes = {
  member: PropTypes.object.isRequired
};

export default Notes;