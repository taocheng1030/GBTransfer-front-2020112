import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import { login, logout } from '../actions/auth';
  

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    let user = localStorage.currentUser?JSON.parse(localStorage.currentUser):null
    if(user!=null){
      this.props.onLogin()
    }
  }
  componentWillReceiveProps(nextProps){
    console.log('props login in navbar====',nextProps.login)
  }
  render() {
    return (
        <header id="header">
        <div className="container">
          <div className="header-row">
            <div className="header-column justify-content-start"> 
              <div className="logo"> <Link className="d-flex" to={this.props.login?'/dashboard':'/'} title="Greenbay Transfer"><img src="images/logo.png" alt="Greenbay Transfer" style={{width:50,height:35}} /></Link> </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>
              <nav className="primary-menu navbar navbar-expand-lg">
                <div id="header-nav" className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                  </ul>
                </div>
              </nav>
            </div>
            
            <div className="header-column justify-content-end">
              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                  {/* {this.props.login&&<li><Link to="/account_bank">Account</Link></li>} */}
                  {this.props.login&&<li><Link to="/send-money">Send</Link></li>}
                  {this.props.login&&<li><Link to="/request-money">Request Money</Link></li>}
                  {this.props.login&&<li><Link to="/exchange-money">Exchange</Link></li>}
                  {this.props.login&&<li><Link to="/live-rates">Live Rates</Link></li>}
                  {this.props.login&&<li><Link to="/withdraw-money">Withraw</Link></li>}
                  {this.props.login&&<li><Link to="/wallet-money">Wallet</Link></li>}                  
                  {this.props.login&&<li><Link to="/deposit-money">Deposit</Link></li>}
                  {this.props.login&&<li><Link to="/transactions">Transactions</Link></li>}
                  {/* {this.props.login&&<li><Link to="/dashboard">Dashboard</Link></li>} */}
                 
                  {/* {this.props.login&&<li><Link to="/request-money">Request</Link></li>} */}
                  {/* {!this.props.login&&<li><Link to="/landing-page-send">Send</Link></li>} */}
                  {/* {this.props.login&&<li><Link to="/landing-page-receive">Receive</Link></li>} */}
                  {!this.props.login&&<li><Link to="/about-us">About Us</Link></li>}
                  {this.props.login&&<li><Link to="/profile">Profile</Link></li>}
                  {/* {this.props.login&&<li><Link to="/fees">Fees</Link></li>} */}
                  {!this.props.login&&<li><Link to="/help">Help</Link></li>}
                  {
                    this.props.login?
                    <li onClick={()=>{console.log("hello World");this.props.onLogout()}}><Link to="/login">Logout</Link> </li>:
                    <li><Link to="/login">Login</Link> </li>
                  }                  
                  {!this.props.login&&<li className="align-items-center h-auto ml-sm-3"><Link className="btn btn-primary d-none d-sm-block" to="/signup">Sign Up</Link></li>}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.authContent.login
  };
}
let mapDispatchToProps = (dispatch) => {
  return {
      onLogin: () => dispatch(login()),
      onLogout: () => dispatch(logout())
  }
}

NavBar = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default NavBar;