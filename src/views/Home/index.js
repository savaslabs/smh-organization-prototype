import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import LoginForm from './../../components/LoginForm';

const Home = ({ auth, login }) => {
  if (auth === 'true') {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container mt-3 mb-3">
      <h1>Agent Portal Log In</h1>
      <LoginForm login={login}/>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  login: PropTypes.func.isRequired
};

export default Home;
