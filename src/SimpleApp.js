import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import NavBar from './components//navBar';
class SimpleApp extends Component {
  render() {
    return (
      <div id="main-wrapper" className="h-100">
          <NavBar />
          {this.props.children}
      </div>
    );  
  }
}

export default withRouter(SimpleApp);
