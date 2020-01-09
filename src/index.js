import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from './js/store'
import 'typeface-roboto'
import App from "./js/components/App";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import User from "./js/components/User";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Link to='/home'>HOME</Link>
      <br/>
      <Link to='user'>USER</Link>
      <Route path='/home' component={App}/>
      <Route path='/user/:filter?' component={User}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
