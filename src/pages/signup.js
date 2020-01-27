import React, { Component } from 'react'
import api from '../services/api'
import {Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'
import Simplert from 'react-simplert'

toast.configure();
class LandingPageFee extends Component {

      constructor(props){
          super(props)
          this.state={
              username:"",
              password:"",
              email:"",
              confirmPassword:"",
              callingCode:"",
              phone:"",
              address:"",
              city:"",
              country:"",
              image:"",
              loading:false,
              showAlert:false
          }
      }
      componentDidMount(){
        
      }
      signup(path){

        let {password,confirmPassword}=this.state
        console.log("password, confirmpassword----",password, confirmPassword)
        if(password!=confirmPassword){
          console.log('please correct password')
          return
        }
        this.setState({loading:true})
        api.signup({
            data: {
                name: this.state.username.trim(),
                email: this.state.email.trim(),
                password: this.state.password.trim(),
                image: this.state.image,
                phone: '+' + this.state.callingCode + this.state.phone,
                phone: "12313214",
                address: this.state.address.trim(),
                city: this.state.city.trim(),
                country: this.state.country
            }
        }, (err1, res1) => {
            console.log("err,res on sign up=",err1,res1)
            this.setState({loading:false})
            if(err1){
              toast(err1.error, { type: toast.TYPE.ERROR });
              return
            }
            toast("Registration Success!", { type: toast.TYPE.SUCCESS });
            this.setState({showAlert:true})
            
        })
    }
    onChange(type,e){
        this.setState({[type]:e.target.value})
    }
    render(){
        let {loading} = this.state
        return(
            <div id="main-wrapper" className="h-100">
            <div className="container-fluid px-0 h-100">
              <div className="row no-gutters h-100">
                <div className="col-md-6">
                  <div className="hero-wrap d-flex align-items-center h-100">
                    <div className=""></div>
                    <div className="hero-bg hero-bg-scroll" style={{backgroundImage:"url('/images/starback.jpg')"}}></div>
                    <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                      <div className="row  no-gutters">
                        <div className="col-10 col-lg-9 mx-auto">
                          <div className="logo mt-5 mb-5 mb-md-0"> <a className="d-flex" href="/" title="Greenbay Transfer"><img src="images/logo-light.png" alt="Greenbay Transfer"/></a> </div>
                        </div>
                      </div>
                      <div className="row my-auto">
                        <div className="col-10 col-lg-9 mx-auto">
                          <h1 className="text-11 text-white mb-4">Get Verified!</h1>
                          <p className="text-4 text-white line-height-4 mb-5">Every day, Greenbay Transfer makes thousands of customers happy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="container my-4">
                    <div className="row">
                      <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                        <h3 className="font-weight-400 mb-4">Sign Up</h3>
                        <form id="signupForm">
                          <div className="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" value={this.state.username} required placeholder="Enter Your Name"  onChange={this.onChange.bind(this,"username")}/>
                          </div>
                          <div className="form-group">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" className="form-control" id="emailAddress"  value={this.state.email}  required placeholder="Enter Your Email"  onChange={this.onChange.bind(this,"email")}/>
                          </div>
                          <div className="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" className="form-control" id="loginPassword" value={this.state.password} required placeholder="Enter Password" onChange={this.onChange.bind(this,"password")}/>
                          </div>
                          <div className="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" value={this.state.confirmPassword}  required placeholder="Enter Password" onChange={this.onChange.bind(this,"confirmPassword")}/>
                          </div>
                          {/* <Button className="btn btn-primary btn-block my-4" onClick={()=>{this.signup()}}>Sign Up</Button> */}
                          <Button className="btn btn-primary btn-block my-4" onClick={()=>{console.log('logining::::::');this.signup()}}>
                            {!loading && <div>Sign Up</div>}
                            {loading && <Loader type="Oval" color="white" height={20} width={20} />}
                          </Button>
                        </form>
                        <p className="text-3 text-center text-muted">Already have an account? <a className="btn-link" href="/login">Log In</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Simplert 
                showSimplert={ this.state.showAlert }
                type={ "success" }
                title={ "Welcome to Greenbay!" }
                message={ "We've sent verification code to your email. \n Please check your E-mail" }
            />
          </div>
        )
    }
}

export default LandingPageFee