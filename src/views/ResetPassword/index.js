import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { message: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick = e => {
    e.preventDefault();
    this.resetForm.reset();
    this.setState({ message: true });
  };

  render() {
    return (
      <div className="form--login form--limit-width text-center container pb-5">
        <h2>Reset Password</h2>
        {this.state.message && (
          <Alert variant="success">
            We'll send you a link to reset your password.
          </Alert>
        )}
        <Form ref={form => (this.resetForm = form)} className="mb-3">
          <Form.Group controlId="loginEmail">
            <Form.Label className="sr-only sr-only-focusable">
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={this.onClick}
            className="mb-5"
          >
            Reset
          </Button>

          <Form.Text>
            <Link to="/">Back to Log In</Link>
          </Form.Text>
        </Form>
      </div>
    );
  }
}

export default ResetPassword;
