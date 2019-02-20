import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      auth: true
    })
  }

  logout() {
    this.setState({
      auth: false
    })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Header auth={this.state.auth} logout={this.logout}/>
          <main className='container'>
            <Switch>
              <Route
                exact path='/'
                render={() => <Home auth={this.state.auth} login={this.login}/>}
              />
              <Route render={function () {
                return <p>Not Found</p>
              }} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
