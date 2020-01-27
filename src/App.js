import React, { Component } from 'react'
import './App.css';
import NavBar from './components//navBar';
import Footer from './components//footer';
import {withRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <NavBar />
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );  
  }
}

export default withRouter(App);
