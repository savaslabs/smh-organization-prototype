import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      auth: true
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
          <main>
            <Switch>
              <Route
                exact path='/'
                render={() => <Home auth={this.state.auth} login={this.login}/>}
              />
              <Route path="/member/:id" component={MemberProfile} />
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
