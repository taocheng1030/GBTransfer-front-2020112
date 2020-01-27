import React, { Component } from 'react'
import api from '../services/api'

class WithdrawMoneyConfirm extends Component {
  state = {
    isProcessing: false
  }
  componentDidMount() {
    console.log(this.props.location)
  }

  withdrawMoney() {
    let {param} = this.props.location.state
    this.setState({
      isProcessing: true
    })
    api.requestWithdraw(param,(err, res) => {
      this.setState({
        isProcessing: false
      })
      if(!err && !res.error) {
        this.props.history.push('/withdraw-money-success', {confirmDate: res.result, param})
      } else {
        this.props.history.push('/withdraw-money-failure')
      }
    })
  }

  render(){
    let {state = {}} = this.props.location
    let {param} = state
    if(!param || !param.amount) return null
    let {isProcessing} = this.state
    return(
      <div id="content" className="py-4">
      <div className="container">
        <h2 className="font-weight-400 text-center mt-3 mb-4">Withdraw Money</h2>
        <div className="row">
          <div className="col-md-8 col-lg-6 col-xl-5 mx-auto"> 
            <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
              <p className="text-4 text-center alert alert-info">You are Withdraw money <br/>
                to<br/>
                <span className="font-weight-500">{param.paymentLink}</span></p>
              <p className="mb-2 mt-4">Amount to Withdraw <span className="text-3 float-right">{param.amount} {param.currency}</span></p>
              {/* <p className="text-muted">Transactions fees <span className="float-right d-flex align-items-center">5.00 USD</span></p> */}
              {/* <hr/> */}
              {/* <p className="font-weight-500">Total<span className="text-3 float-right">995.00 USD</span></p> */}
              <form id="form-withdraw-money-confirm" method="post">
                <button disabled = {isProcessing} className="btn btn-primary btn-block" onClick={this.withdrawMoney.bind(this)}>
                {isProcessing?'Processing...':'Withdraw Money'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default WithdrawMoneyConfirm