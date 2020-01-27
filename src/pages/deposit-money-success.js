import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
class DepositMoneySuccess extends Component {
    render(){
      let {state = {}} = this.props.location
      let {param, result} = state
      if(!param) return null
        return(
            <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto"> 
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                    <div className="text-center my-5">
                      <p className="text-center text-success text-20 line-height-07"><i className="fas fa-check-circle"></i></p>
                      <p className="text-center text-success text-8 line-height-07">Success!</p>
                      <p className="text-center text-4">Deposit Complete</p>
                    </div>
                    <p className="text-center text-3 mb-4">You've successfully <span className="text-4 font-weight-500">{param.amount} {param.currency}</span> Deposit Money, See transaction details under <a href="/transactions">Activity</a>.</p>
                    <Button className="btn btn-primary btn-block"
                        onClick={()=>{
                          this.props.history.push('/deposit-money')
                        }}
                    >Deposit Money Again</Button>
                    {/* <button className="btn btn-link btn-block"><i className="fas fa-print"></i> Print</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default DepositMoneySuccess