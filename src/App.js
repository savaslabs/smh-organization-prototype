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
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({
      auth: false
    })
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Header auth={this.state.auth} logout={this.logout}/>
          <Switch>
            <Route
              exact path='/'
              render={() => <Home auth={this.state.auth} />}
            />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
