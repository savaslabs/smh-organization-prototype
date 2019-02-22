import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './../../components/LoginForm';
import PageHeading from './../../components/PageHeading';

const Home = (props) => {
  if (props.auth) {
    return (
      <div>
      <PageHeading title="Welcome back, Cheryl!" />
        <div className="container">
          <h2>Here is what you missed...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Agent Portal Log In</h1>
      <LoginForm login={props.login}/>
    </div>
  );
};

Home.propTypes = {
  login: PropTypes.func.isRequired
};

export default Home;
