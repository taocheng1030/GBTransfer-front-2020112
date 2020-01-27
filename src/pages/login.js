import React, { Component } from 'react'
import {Button,Form,FormControl,Modal} from 'react-bootstrap'
import api from '../services/api'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import { login, logout } from '../actions/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

toast.configure();

class Login extends Component {
    constructor(props) {
      super(props)
      this.state={
        // email:"admin@greenbaypayment.com",
        // password:"Moskva007#",
        email:"",
        password:"",
        loading:false,
        modalIsOpen:false,
        showModal:false
      }
    }
    componentDidMount(){
      var token = localStorage.getItem("token")
      console.log('token in didmount====',token)
    }
    componentWillReceiveProps(nextProps){
        console.log('nextProps.login=====', nextProps.login)
    }
    login(){
      
      try{
          this.setState({loading:true})
          api.login(this.state.email, this.state.password, (err, res) => {
            console.log('error,res 1 on login',err,res)
            this.setState({ loading: false })    
            if (err == null) {
              this.props.onLogin()
              // this.props.history.push('/transactions')
              this.props.history.push('/dashboard')
              localStorage.setItem("token",res.access_token)
            } else {
              toast("  Login failed!", { type: toast.TYPE.ERROR });
            }
        })
      }catch(e){
        
      }
      
    }
    onChangeValue(type,e){
      e.preventDefault();
      e.stopPropagation();
      if(type=="password"){
         this.setState({password:e.target.value})
      }
      if(type=="email"){
        this.setState({email:e.target.value})
     }
    }
    openModal() {
      this.setState({showModal: true});
  }
   
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = 'green';
    }
    
    closeModal() {
        this.setState({showModal: false});
    }
    
    sendRequest() {
      this.setState({loading:true})
      api.forgotPassword({ email: this.state.forgotEmail }, (err, res) => {
          console.log(err, res)
          this.setState({showModal:false,loading:false})
          if (err == null) {
              this.setState({forgotPassword: '' })
              toast("Send your request successfully! Check your Inbox.", {type:toast.TYPE.SUCCESS});
          } else {
              toast("Input your email or username correctly.", {type:toast.TYPE.WARNING});
          }
      })
  }
    render(){
        let {loading} = this.state
        return(
          <div className="container-fluid px-0 h-100">
          <div className="row no-gutters h-100">
            <div className="col-md-6">
              <div className="hero-wrap d-flex align-items-center h-100">
                <div className=""></div>
                <div className="hero-bg hero-bg-scroll" style={{backgroundImage:"url('/images/starback.jpg')"}}></div>
                <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                  <div className="row no-gutters">
                    <div className="col-10 col-lg-9 mx-auto">
                      <div className="logo mt-5 mb-5 mb-md-0"> <a className="d-flex" href="/index" title="Greenbay Transfer"><img src="images/logo-light.png" alt="Greenbay Transfer"/></a> </div>
                    </div>
                  </div>
                    <div className="row no-gutters my-auto">
                      <div className="col-10 col-lg-9 mx-auto">
                        <h1 className="text-11 text-white mb-4">Welcome back!</h1>
                        <p className="text-4 text-white line-height-4 mb-5">We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container my-4">
                <div className="row">
                  <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                    <h3 className="font-weight-400 mb-4">Log In</h3>
                    {/* <form id="loginForm" method="post"> */}
                    <Form id="loginForm">
                      <div className="form-group">
                        <label for="emailAddress">Email Address</label>
                        <input
                          onChange={this.onChangeValue.bind(this,"email")} 
                          type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="form-group">
                        <label for="loginPassword">Password</label>
                        <input 
                          onChange={this.onChangeValue.bind(this,"password")} 
                          type="password" className="form-control" id="loginPassword" required placeholder="Enter Password"/>
                      </div>
                      <div className="row">
                        <div className="col-sm">
                          <div className="form-check custom-control custom-checkbox">
                            <input id="remember-me" name="remember" className="custom-control-input" type="checkbox"/>
                            <label className="custom-control-label" for="remember-me">Remember Me</label>
                          </div>
                        </div>
                        <div className="col-sm text-right" onClick={()=>{this.setState({showModal:true})}}><a className="btn-link" href="#">Forgot Password ?</a></div>
                      </div>
                      {/* <Button className="btn btn-primary btn-block my-4" type="submit" onClick={()=>{console.log('logining::::::');this.login()}}>Login</Button> */}
                      <Button className="btn btn-primary btn-block my-4" onClick={()=>{console.log('logining::::::');this.login()}}>
                        {!loading && <div>Log In</div>}
                        {loading && <Loader type="Oval" color="white" height={20} width={20} />}
                      </Button>
                    </Form>
                    <p className="text-3 text-center text-muted">Don't have an account? <a className="btn-link" href="/signup">Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Forgot Password?</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding:20}}>We are ready to help you recover password</Modal.Body>
              <div style={{paddingHorizontal:20}}>
                  <FormControl type="text" placeholder="Email/Username" 
                    style={{width:'80%',marginLeft:'10%',marginBottom:20}}
                    value={this.state.forgotEmail} onChange={(e) => this.setState({ forgotEmail: e.target.value })} required />
              </div>
            <Modal.Footer>
              <Button variant="primary" style={{width:280}}  onClick={() => this.sendRequest()}>
                  {!loading && <div>Request New Password</div>}
                  {loading && <Loader type="Oval" color="white" height={20} width={20} />}
              </Button>
              <Button variant="secondary" onClick={this.closeModal.bind(this)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
              <div style={{ padding: 100, width:800 }}>
                  <FormControl type="text" placeholder="Email/Username" className="form-control mine-input-bottom-border"
                      value={this.state.forgotEmail} onChange={(e) => this.setState({ forgotEmail: e.target.value })} required />
                  <div className="d-flex row align-items-center justify-content-center w-100">
                      <Button bsClass="btn btn-oval btn-warning" style={{ height: 40, width: 180 }} onClick={() => this.sendRequest()}>Request New Password</Button>
                      <div style={{ width: 30 }} />
                      <Button bsClass="btn btn-oval btn-default" style={{ height: 40, width: 180 }} onClick={() => this.setState({ showModal: false })}>Cancel</Button>
                  </div>
              </div>
          </Modal> */}
        </div>
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

Login = connect(mapStateToProps,mapDispatchToProps)(Login);

export default Login;