import React from 'react';
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

const LoginForm = ({ login }) => {
  return (
    <Form className="form--login">
      <Form.Group controlId="loginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={login}>
        Log In
      </Button>

      <Form.Text>
        <Link to="/reset-password">Forgot password?</Link>
      </Form.Text>
    </Form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
