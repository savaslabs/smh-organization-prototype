import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  faSearch,
  faAllergies,
  faFemale,
  faFileMedical,
  faNotesMedical,
  faHospital,
  faUsers,
  faSyringe,
  faVials,
  faPrescriptionBottleAlt
} from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import ResetPassword from './views/ResetPassword';
import Dashboard from './views/Dashboard';
import MemberProfile from './views/MemberProfile';

// Add font awesome icons to library for use in app.
library.add(
  faTimes,
  faSearch,
  faAllergies,
  faFemale,
  faFileMedical,
  faNotesMedical,
  faHospital,
  faUsers,
  faSyringe,
  faVials,
  faPrescriptionBottleAlt
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: localStorage.getItem('auth') || '0'
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    localStorage.setItem('auth', '1');
    this.setState({ auth: '1' })
  }

  logout() {
    localStorage.setItem('auth', '0');
    this.setState({ auth: '0' });
    return <Redirect to='/' />;
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Header auth={this.state.auth} logout={this.logout}/>
          <main>
            <Switch>
              <Route
                exact path='/'
                render={() => <Home auth={this.state.auth} login={this.login}/>}
              />
              <Route path='/reset-password' component={ResetPassword} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/member/:id' component={MemberProfile} />
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
