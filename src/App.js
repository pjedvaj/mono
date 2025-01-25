import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  } from 'mobx-react';

import './common/scss/styles.scss';
import Header from './components/layouts/Header';
import Grid from './components/pages/GridComponent';
import List from './components/pages/ListComponent';
import Add from './components/pages/AddComponent';
import Edit from './components/pages/EditComponent';
import Footer from './components/layouts/Footer';

class App extends Component {

  render() {

    return (
      <Router>
        <Header />
          <Route exact path="/mono" component={ Grid } />
          <Route path="/list" component={ List } />
          <Route path="/add" component={ Add } />
          <Route path="/edit" component={ Edit } />
        <Footer />
      </Router>
    )
  }
}

export default App;
