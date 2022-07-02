import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'reat-router-dom';

import './App.css';

import Navbar from './components/laout/Navbar';
import Footer from './components/laout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store';
class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <Router>
<div>
<Navbar />
<Route exact path="/" component={Landing} />
<Route exact path="/movie/:id" component={Moveie} />
<Footer />

</div>
      </Router>
      </Provider>
    );
  }
}

export default App;
