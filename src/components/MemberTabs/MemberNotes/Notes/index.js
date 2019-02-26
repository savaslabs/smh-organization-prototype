import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button} from 'react-bootstrap';

const Note = ({ date, note, user }) => {
  return (
    <li>
      <p className='note__date'>{date}</p>
      <p className='note__content'>{note}</p>
      <p className='note__user'>By {user}</p>
    </li>
  );
};

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getMemberNotes = this.getMemberNotes.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  };

  onClick(e) {
    e.preventDefault();
    const id = this.props.member.id;

    // Create the new note object.
    const now = new Date();
    const newNote = {
      date: now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear(),
      note: this.state.value,
      user: 'Cheryl Sloan (Interfaith)'
    };

    // Get existing array of notes, or create a new array, then push new note.
    let notes = this.getMemberNotes() || [];
    notes.push(newNote);

    // Update local storage.
    localStorage.setItem('notes' + id, JSON.stringify(notes));
  };

  getMemberNotes() {
    const id = this.props.member.id;
    return JSON.parse(localStorage.getItem('notes' + id));
  }

  render() {
    const { member } = this.props;
    const notes = this.getMemberNotes();

    return (
      <div>
        <Form className='mb-3'>
          <Form.Group controlId='newNote'>
            <Form.Label>Write a note about {member.name}</Form.Label>
            <textarea rows='3' value={this.state.value} onChange={this.onChange} />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={this.onClick}>
            Submit
          </Button>
        </Form>

        <ul className='notes__list'>
          {notes && notes.map((note, key) =>
              <Note
                key={key}
                date={note.date}
                note={note.note}
                user={note.user}
              />
            )
          }
          <Note
            date='2/26/2019'
            note={member.firstName + ' is food insecure and needs to be able to access the local pantry.'}
            user='Cheryl Sloan (Interfaith)'
          />
          <Note
            date='2/25/2019'
            note={member.firstName + ' is food insecure and needs to be able to access the local pantry.'}
            user='Cheryl Sloan (Interfaith)'
          />
        </ul>
      </div>
    );
  }
}

Notes.propTypes = {
  member: PropTypes.object.isRequired
};

export default Notes;