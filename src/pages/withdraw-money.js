import React, { Component } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as paymentAction from '../actions/payment';
import api from '../services/api'
import { bindActionCreators } from 'redux';
const defaultCurrencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
];
const withDrawMethodOptions = [
  { value: 'paypal', label: 'Paypal' },
  { value: 'bank', label: 'Bank Withdraw' }
]
class WithdrawMoney extends Component {
  state = {
    balance: {
      currency: 'USD',
      balance: 0
    },
    withdrawAmount: 0,
    withdrawAmountMax: 0,
    withdrawCurrency: 'USD',
    withdrawMethod: "",
    paypalAccount: "",
    bankAccount: "",
    processing: false,
    validated: false,
  }

  componentDidMount() {
    this.props.actions.getCurrencies();
    this.props.actions.getMyWallet();
  }
  changeWithdrawMethod(e) {
    this.setState({
      withdrawMethod: e.target.value
    })
  }
  changeCurrency(e) {
    this.setState({
      withdrawCurrency: e.target.value
    })
  }
  changeAmount(e) {
    this.setState({
      withdrawAmount: e.target.value
    })
  }
  changePaypal(e) {
    this.setState({
      paypalAccount: e.target.value
    })
  }
  changeBank(e) {
    this.setState({
      bankAccount: e.target.value
    })
  }

  handleSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === false) {
      return
    }

    // this.setValidated(true)

    let { withdrawAmount, withdrawCurrency, withdrawMethod, paypalAccount, bankAccount } = this.state
    if (withdrawMethod === 'bank') return
    if (withdrawMethod === 'paypal') {
      this.props.history.push('/withdraw-money-confirm', {
        param: {
          paymentType: 'paypal',
          amount: withdrawAmount,
          paymentLink: paypalAccount,
          currency: withdrawCurrency
        }
      })
    }
  }

  setValidated(val) {
    this.setState({
      validated: val
    })
  }
  render() {
    let { wallet, currencies, fetchingWallet } = this.props
    let { withdrawAmount, withdrawCurrency, withdrawMethod, paypalAccount, bankAccount, validated, withdrawAmountMax } = this.state
    var currencyOptions = currencies.length > 0 ? currencies.map(o => {
      return {
        value: o.unit,
        label: o.name
      }
    }) : defaultCurrencyOptions;
    wallet = wallet || []
    wallet.length > 0 && wallet.map((item, index) => {
      if (this.state.withdrawCurrency === item.currency) {
        withdrawAmountMax = item.balance.toFixed(2)
      }
    })
    return (
      <div id="content" className="py-4">
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3 mb-4">Withdraw Money</h2>
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
              <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                <div className="text-center bg-primary p-4 rounded mb-4">
                  <p className="text-white">Available Balance</p>
                  {wallet.length === 0 && fetchingWallet && <p className="text-6 text-white">Loading...</p>}
                  {wallet.length === 0 && !fetchingWallet && <div>
                    <h3 className="text-10 text-white font-weight-400">No Balance</h3>
                    <a href="/deposit-money" className="btn btn-outline-light btn-sm shadow-none text-uppercase rounded-pill text-1">Deposit Money</a>
                  </div>}
                  {
                    wallet.length > 0 && wallet.map((balance, index) => {
                      return <div style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                        <h4 className="text-white font-weight-500" >{balance.currency}</h4>
                        <h4 className="text-white font-weight-500">{balance.balance.toFixed(2)}</h4>
                      </div>
                    })
                  }
                </div>
                {wallet.length > 0 && <Form noValidate validated={validated} onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="withdrawMethod">Withdraw Method</label>
                    <select id="withdrawMethod" value={withdrawMethod} className="custom-select" required="" onChange={this.changeWithdrawMethod.bind(this)}>
                      <option value="">Select a withdraw method</option>
                      {
                        withDrawMethodOptions.map((o) => (
                          <option value={o.value} key={o.value}>{o.label}</option>
                        ))
                      }
                    </select>
                  </div>
                  {withdrawMethod === 'paypal' && <Form.Group controlId="validationCustom03">
                    <Form.Label>Paypal Account</Form.Label>
                    <Form.Control type="email" placeholder="Email" required value={paypalAccount} onChange={this.changePaypal.bind(this)} />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid paypal account.
                        </Form.Control.Feedback>
                  </Form.Group>}
                  {/* {withdrawMethod=='paypal'&&<div className="form-group">
                        <label for="paypalAccount">Paypal Account</label>
                        <input type="email" className="form-control" id="paypalAccount" value={paypalAccount} placeholder="Email" onChange={this.changePaypal.bind(this)} required/>
                      </div>} */}
                  {withdrawMethod == 'bank' && <div className="form-group">
                    <label htmlFor="bankAccount">Bank Account</label>
                    <input type="text" className="form-control" id="bankAccount" value={bankAccount} placeholder="" onChange={this.changeBank.bind(this)} required />
                  </div>}
                  <div className="form-group">
                    <label htmlFor="youSend">Withdraw Amount</label>
                    <div className="input-group">
                      <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                      <input type="number" step=".01" className="form-control"
                        min={0.1}
                        max={withdrawAmountMax}
                        data-bv-field="youSend" id="youSend"
                        value={withdrawAmount}
                        onChange={this.changeAmount.bind(this)}
                        placeholder="" />
                      <div className="input-group-append">
                        <span className="input-group-text p-0">
                          <select
                            value={withdrawCurrency}
                            onChange={this.changeCurrency.bind(this)}
                            data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                            {
                              currencyOptions.map((currency) => <option value={currency.value}>{currency.label}</option>)
                            }
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <p className="text-muted mt-4">Transactions fees <span className="float-right d-flex align-items-center">5.00 USD</span></p>
                      <p className="font-weight-500">Amount to Withdraw <span className="text-3 float-right">1,000.00 USD</span></p> */}
                  {withdrawMethod !== "" && <Button
                    type="submit"
                    className="btn btn-primary btn-block">Continue</Button>}
                </Form>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    wallet: state.payment.wallet,
    currencies: state.payment.currencies,
    fetchingWallet: state.payment.fetchingWallet,
  };
}
let mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...paymentAction }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawMoney);