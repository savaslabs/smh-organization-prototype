import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './../../components/LoginForm';

const Home = (props) => {
  if (props.auth) {
    return (
      <h1>Home Page (authed)</h1>
    );
  }

  return (
    <div>
      <h1>Agent Portal Log In</h1>
      <LoginForm login={props.login}/>
    </div>
  );
};

Home.propTypes = {
  login: PropTypes.func.isRequired
};

export default Home;
