import React from 'react';

const Home = (props) => {
  if (props.auth) {
    return (
      <h1>Home Page (authed)</h1>
    );
  }

  return (
    <h1>Home Page</h1>
  );
};

export default Home;
