import React from "react";
import Link from "react-router-dom/Link";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LoginForm = ({ login }) => {
  return (
    <Form className="form--login form--limit-width text-center pb-5">
      <Form.Group controlId="loginEmail">
        <Form.Label className="sr-only sr-only-focusable">
          Email address
        </Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="loginPassword">
        <Form.Label className="sr-only sr-only-focusable">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group
        controlId="loginOptions"
        className="form--login__options d-flex justify-content-between"
      >
        <Form.Check type="checkbox" label="Remember me" />
        <Form.Text>
          <Link to="/reset-password">Forgot password?</Link>
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={login} className="mb-5">
        Sign In
      </Button>

      <Form.Text>
        <p className="mb-1">Need to create an account?</p>
        <Link to="/">Create Account</Link>
      </Form.Text>
    </Form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
