import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
  render() {
    return (
      <Form className="form--login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>

        <Form.Text>
          <Link to="/reset-password">Forgot password?</Link>
        </Form.Text>
      </Form>
    );
  }
}

export default LoginForm;
