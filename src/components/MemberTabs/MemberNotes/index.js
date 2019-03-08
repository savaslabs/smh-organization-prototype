import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Table } from "react-bootstrap";

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

class MemberNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      newNotes: this.getMemberNotes()
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getMemberNotes = this.getMemberNotes.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    const id = this.props.member.id;

    // Create the new note object.
    const now = new Date();
    const newNote = {
      date: now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear(),
      note: this.state.value,
      user: "Cheryl Deggins",
      userOrg: "Trinity Health"
    };

    // Get existing array of notes, or create a new array, then push new note.
    let notes = this.getMemberNotes() || [];
    notes.unshift(newNote);

    // Update session storage.
    sessionStorage.setItem("notes" + id, JSON.stringify(notes));

    // Update state and clear textarea.
    this.setState({
      value: "",
      newNotes: notes
    });
  }

  getMemberNotes() {
    const id = this.props.member.id;
    return JSON.parse(sessionStorage.getItem("notes" + id));
  }

  render() {
    const { member } = this.props;
    const notes = this.state.newNotes;

    return (
      <div>
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

        <Form className="mb-5">
          <Form.Group controlId="newNote">
            <Form.Label>Write a note about {member.name}</Form.Label>
            <textarea
              rows="3"
              value={this.state.value}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.onClick}>
            Submit
          </Button>
        </Form>

        <ul className="notes__list">
          {notes &&
            notes.map((note, key) => (
              <Note
                key={key}
                date={note.date}
                note={note.note}
                user={note.user}
                userOrg={note.userOrg}
              />
            ))}
          <Note
            date="2/26/2019"
            note={
              member.firstName +
              " is food insecure and needs to be able to access the local pantry."
            }
            user="Cheryl Deggins"
            userOrg="Trinity Health"
          />
          <Note
            date="2/25/2019"
            note={
              member.firstName +
              " is food insecure and needs to be able to access the local pantry."
            }
            user="Cheryl Deggins"
            userOrg="Trinity Health"
          />
        </ul>
      </div>
    );
  }
}

MemberNotes.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberNotes;
