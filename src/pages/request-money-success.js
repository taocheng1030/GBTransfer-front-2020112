import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
class LandingPageFee extends Component {
    render(){
        return(
            <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3 mb-4">Request Money</h2>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto"> 
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                    <div className="text-center my-5">
                      <p className="text-center text-success text-20 line-height-07"><i className="fas fa-check-circle"></i></p>
                      <p className="text-center text-success text-8 line-height-07">Success!</p>
                      <p className="text-center text-4">Transactions Complete</p>
                    </div>
                    <p className="text-center text-3 mb-4">You've successfully <span className="text-4 font-weight-500">$1000</span> Request Money to <span className="font-weight-500">demo@gmail.com</span>, See transaction details under <a href="#">Activity</a>.</p>
                    <Button 
                        onClick={()=>{console.log('butn-clicked==='); this.props.history.push('/request-money')}}
                        className="btn btn-primary btn-block">Request Money Again</Button>
                    <button className="btn btn-link btn-block"><i className="fas fa-print"></i> Print</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default LandingPageFee