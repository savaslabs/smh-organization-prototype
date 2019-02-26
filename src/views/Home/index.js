import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import LoginForm from './../../components/LoginForm';

const Home = ({ auth, login }) => {
  if (auth === '1') {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <h1>Agent Portal Log In</h1>
      <LoginForm login={login}/>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
};

export default Home;
