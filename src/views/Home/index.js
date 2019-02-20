import React from 'react';
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
      <LoginForm />
    </div>
  );
};

export default Home;
