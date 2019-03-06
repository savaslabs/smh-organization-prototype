import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faPlus,
  faCircle
} from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Home from './views/Home';
import ResetPassword from './views/ResetPassword';
import Dashboard from './views/Dashboard';
import Search from './views/Search';
import MemberProfile from './views/MemberProfile';

// Add font awesome icons to library for use in app.
library.add(
  faArrowLeft,
  faPlus,
  faCircle
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: sessionStorage.getItem('auth') || false,
      searchTerm: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.search = this.search.bind(this);
  }

  login() {
    sessionStorage.setItem('auth', 'true');
    this.setState({ auth: 'true' })
  }

  logout() {
    sessionStorage.setItem('auth', 'false');
    this.setState({ auth: 'false' });
    return <Redirect to='/' />;
  }

  search(searchTerm) {
    this.setState({ searchTerm: searchTerm });
  }

  render() {
    return (
      <Router>
        <div className={'app auth--' + this.state.auth}>
          <Header auth={this.state.auth} logout={this.logout} search={this.search}/>
          <main>
            <Switch>
              <Route
                exact path='/'
                render={(props) => <Home {...props} auth={this.state.auth} login={this.login}/>}
              />
              <Route path='/reset-password' component={ResetPassword} />
              <Route
                path='/dashboard'
                render={(props) => <Dashboard {...props} auth={this.state.auth} />}
              />
              <Route
                path='/search'
                render={(props) => <Search {...props} auth={this.state.auth} searchTerm={this.state.searchTerm}/>}
              />
              <Route
                path='/member/:id'
                render={(props) => <MemberProfile {...props} auth={this.state.auth} />}
              />
              <Route render={function () {
                return <h1 className="text-center mt-5">Page Not Found</h1>
              }} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
