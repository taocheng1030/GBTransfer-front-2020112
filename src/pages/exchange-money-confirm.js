import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import api from '../services/api'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

const defaultParam = {
  user: {},
  sendAmount: 0,
  recipientAmount: 0,
  fee: 0,
  sendCurrency: 'USD',
  recipientCurrency: 'USD',
}
class ExchangeMoneyConfirm extends Component {
  state = {
    isProcessing: false,
    descriptions: ""
  }

  componentDidMount() {
    console.log(this.props.location)
  }
  changeDescriptions(e) {
    this.setState({ descriptions: e.target.value })

  }
  exchangeMoney() {
    let { param } = this.props.location.state
    let { descriptions } = this.state
    var savedUser = JSON.parse(localStorage.currentUser)
  
    this.setState({
      isProcessing: true
    })
   
    api.transfer({
      data: {
        description: descriptions,
        fromCurrency: param.sendCurrency,
        toCurrency: param.recipientCurrency,
        toUserId: savedUser.user.id,
        amount: Number(param.sendAmount)
      }
    }, (err, res) => {
      this.setState({
        isProcessing: false
      })
      console.log('erro,res on send moneytransfer--', err, res)
      if (!err && !res.error) {
        this.props.history.push('/exchange-money-success', { ...res, user: savedUser.user })
      } else {
        this.props.history.push('/exchange-money-failure')
      }
    })
  }
  render() {
    let { state = {} } = this.props.location
    let { param } = state
    if (!param) return null

    let { isProcessing, descriptions } = this.state
    return (
      <div id="content" className="py-4">
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3">Exchange Money</h2>
          {/* <p className="text-4 text-center mb-4">You are sending money to <span className="font-weight-500">{param.user.label}</span></p> */}
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
              <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                <form id="form-send-money" method="post">
                  
                  <h3 className="text-5 font-weight-400 mb-3">Details</h3>
                  <p className="mb-1">From Amount <span className="text-3 float-right">{param.sendAmount} {param.sendCurrency}</span></p>
                  <p className="mb-1">Total fees <span className="text-3 float-right">{param.fee} {param.sendCurrency}</span></p>
                  <p className="mb-1">To Amount <span className="text-3 float-right">{param.recipientAmount} {param.recipientCurrency}</span></p>
                  <hr />
                  {/* <p className="font-weight-500">Total<span className="text-3 float-right">1,007.21 USD</span></p> */}
                  <Button onClick={this.exchangeMoney.bind(this)} disabled={isProcessing}
                    className="btn btn-primary btn-block">{isProcessing ? 'Exchanging Money...' : 'Exchange Money'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExchangeMoneyConfirm