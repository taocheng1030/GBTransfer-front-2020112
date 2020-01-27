import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
class LandingPageFee extends Component {
    render(){
        return(
            <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                    <h3 className="text-5 font-weight-400 mb-3">Deposit Money via</h3>
                    <form id="form-send-money" method="post">
                      <div className="form-group">
                        <label for="paymentMethod">Bank</label>
                        <select id="cardType" className="custom-select" required="">
                          <option>HDFC Bank</option>
                          <option>Bank 2</option>
                          <option>Bank 3</option>
                        </select>
                      </div>
                      <div className="alert alert-info rounded shadow-sm py-3 px-4 px-sm-2 mb-4">
                        <div className="row">
                          <p className="col-sm-5 opacity-7 text-sm-right mb-0 mb-sm-3">Account Name:</p>
                          <p className="col-sm-7">Smith Rhodes</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-5 opacity-7 text-sm-right mb-0 mb-sm-3">Account Number:</p>
                          <p className="col-sm-7">XXXXXXXXXXXX-9025</p>
                        </div>
                        <div className="row">
                          <p className="col-sm-5 opacity-7 text-sm-right mb-0">Bank Name:</p>
                          <p className="col-sm-7 mb-0">HDFC Bank</p>
                        </div>
                      </div>
                      <h3 className="text-5 font-weight-400 mb-3">Details</h3>
                      <p className="mb-1">Deposit Amount <span className="text-3 float-right">1,000.00 USD</span></p>
                      <p className="mb-1">Fees <span className="text-3 float-right">0.00 USD</span></p>
                      <hr/>
                      <p className="font-weight-500">Total<span className="text-3 float-right">1,000.00 USD</span></p>
                      <Button className="btn btn-primary btn-block"
                          onClick={()=>{console.log('butn-clicked==='); this.props.history.push('/deposit-money-success')}}
                      >Confirm</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default LandingPageFee