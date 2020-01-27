import React, { Component } from 'react'
import {Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import * as paymentAction from '../actions/payment';
import { bindActionCreators } from 'redux';
import StripeCheckout from "react-stripe-checkout";
import config from '../config'
import api from '../services/api'
import promise from 'redux-promise-middleware';

const defaultCurrencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
];
const depositMethodOptions = [
  {value:'stripe', label:'Credit or Debit Card'},
  {value:'paypal', label:'Paypal'},
  {value:'bank', label:'Bank Accounts'}
]

var parseQueryString = function (queryString) {
  var params = {}, queries, temp, i, l;
  queries = queryString.split("&");
  // Convert the array of strings into an object
  for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
  }
  return params;
};

let _depositMoney = null
class DepositMoney extends Component {
  state = {
    depositAmount: 1,
    depositCurrency: 'USD',
    depositMethod: "",
    depositAccount: "",
    processing: false,
    validated: false,
    currentUser: JSON.parse(localStorage.currentUser)
  }

  componentDidMount() {
    _depositMoney = this
    this.props.actions.getCurrencies()
  }
  changeDepositMethod(e) {
    this.setState({
      depositMethod: e.target.value
    })

    if(e.target.value === 'paypal') {
      setTimeout(()=>{
        window.paypal.Button.render({
          env: 'production', // Or 'production'
          // Set up the payment:
          // 1. Add a payment callback
          payment: (data, actions) => {
            console.log('data, actions',data, actions)
            let {depositAmount, depositCurrency, depositMethod, depositAccount} = _depositMoney.state
            // 2. Make a request to your server
            // return actions.request.post('/my-api/create-payment/')
            //   .then(function(res) {
            //     // 3. Return res.id from the response
            //     return res.id;
            //   });
            return new Promise((resolve, reject)=>{
              api.createPaypalPayment({
                amount: Number(depositAmount),
                currency: depositCurrency
              }, (error, result) => {
                console.log('createPaypalPayment - error, result', error, result)
                if(!error) {
                  _depositMoney.paypal = result.result.result
                  resolve(_depositMoney.paypal.id)
                } else {
                  reject(error)
                }
              })    
            })
          },
          // Execute the payment:
          // 1. Add an onAuthorize callback
          onAuthorize: function(data, actions) {
            // 2. Make a request to your server
            // return actions.request.post('/my-api/execute-payment/', {
            //   paymentID: data.paymentID,
            //   payerID:   data.payerID
            // })
            //   .then(function(res) {
            //     // 3. Show the buyer a confirmation message.
            //   });
            return new Promise((resolve, reject)=>{
              api.executePaypalPayment({
                paymentID: data.paymentID,
                payerID: data.payerID,
                token: _depositMoney.paypal.access_token,
              }, (err, result) => {
                if (err == null) {
                  _depositMoney.props.history.push('/deposit-money-success', {
                    param: {
                      paymentType: 'paypal',
                      amount: _depositMoney.paypal.transactions[0].amount.total,
                      currency: _depositMoney.paypal.transactions[0].amount.currency,
                    },
                    result: result
                  })
                  resolve(true)
                }
                else {
                  _depositMoney.props.history.push('/deposit-money-failure', {
                    param: {
                      paymentType: 'paypal',
                    },
                    error: err
                  })
                  resolve(false)
                }
              })
            });
          }
        }, '#paypal-button');
      }, 100)
    }
  }
  changeCurrency(e) {
    this.setState({
      depositCurrency: e.target.value
    })
  }
  changeAmount(e) {
    this.setState({
      depositAmount: e.target.value
    })
  }

  handleSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === false) {
      this.setValidated(false)
      return
    }

    // this.setValidated(true)

    let {depositAmount, depositCurrency, depositMethod, depositAccount} = this.state
    if(depositMethod === 'bank') return
    if(depositMethod === 'paypal') {
      this.setState({ processing: true })
      api.createPaypalPayment({
          amount: Number(depositAmount),
          currency: depositCurrency
      }, (error, result) => {
        console.log('createPaypalPayment - error, result', error, result)
          if (!error && !result.error) {
              try {
                  var approvalUrl = result.result.result.links.find(o => o.rel == 'approval_url').href
                  var token = result.result.result.access_token
                  this.approvalUrl = approvalUrl
                  var payerId = result.result.result.id
                  const url = approvalUrl
                  let paypalWindow = window.open(url, 'Data', 'height=500,width=400');
                  this.urlWatcher = setInterval(() => {
                      if (!!paypalWindow) {
                          var txt = paypalWindow.location.href
                          var urlParams = parseQueryString(txt.substr(txt.indexOf('?') + 1));
                          var extractedPaymentId = urlParams.paymentId
                          if (!!extractedPaymentId) {
                              clearInterval(this.urlWatcher)
                              paypalWindow.close()
                              api.executePaypalPayment({
                                  paymentID: urlParams['paymentId'],
                                  payerID: urlParams['PayerID'],
                                  token: token,
                              }, (err, result) => {
                                if (err == null) {
                                  this.props.history.push('/deposit-money-success', {
                                    param: {
                                      paymentType: 'paypal',
                                      amount: depositAmount,
                                      currency: depositCurrency
                                    },
                                    result: result
                                  })
                                }
                                else {
                                  this.props.history.push('/deposit-money-failure', {
                                    param: {
                                      paymentType: 'paypal',
                                      amount: depositAmount,
                                      currency: depositCurrency
                                    },
                                    error: err
                                  })
                                }
                              })

                          }
                      }
                  }, 1000)
              }
              catch (e) {
                  console.log('e on result----', e)
              }
          }
      })
    } 
  }

  onOpenedStripePopup(e) {
    console.log('this.refs["form-deposit-money"]', this.refs["form-deposit-money"])
    if (this.refs["form-deposit-money"].checkValidity() === false) {
      e.stopPropagation()
      e.preventDefault()
      return
    }
    return false
  }

  setValidated(val) {
    this.setState({
      validated: val
    })
  }

  handleStripe = (token) => {
    let {depositAmount, depositCurrency, depositMethod, depositAccount, validated, currentUser} = this.state

    const product = {
        name: "GreenBay Transfer",
        price: Number(depositAmount),
        currency: depositCurrency,
        description: "Stripe charge"
    };

    this.setState({ processing: true })
    api.chargeStripe({ token, product }, (err, res) => {
      console.log('chargeStripe - err, res', err, res)
        this.setState({ processing: false })
        if (err == null) {
          this.props.history.push('/deposit-money-success', {
            param: {
              paymentType: 'stripe',
              amount: depositAmount,
              currency: depositCurrency
            },
            result: res
          })
        }
        else {
          this.props.history.push('/deposit-money-failure', {
            param: {
              paymentType: 'stripe',
              amount: depositAmount,
              currency: depositCurrency
            },
            error: err
          })
        }
    })
  }
    render(){
      let {currencies} = this.props
      let {depositAmount, depositCurrency, depositMethod, depositAccount, validated, currentUser, processing} = this.state
      var currencyOptions = currencies.length>0?currencies.map(o=>{
        return {
          value: o.unit,
          label: o.name
        }
      }):defaultCurrencyOptions;
      console.log('currentUser',currentUser)
        return(
            <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">              
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4"> 
                    <Form ref="form-deposit-money" noValidate validated={validated}>
                      <div className="form-group">
                        <label htmlFor="youSend">Amount</label>
                        <div className="input-group">
                          <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                          <input type="number" step=".01" className="form-control" 
                            min={1}
                            data-bv-field="youSend" id="youSend" 
                            value={depositAmount} 
                            onChange={this.changeAmount.bind(this)}
                            placeholder="" required/>
                          <div className="input-group-append"> 
                            <span className="input-group-text p-0">
                              <select 
                                value={depositCurrency} 
                                onChange={this.changeCurrency.bind(this)}
                                data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                                {
                                  currencyOptions.map((currency)=><option value={currency.value}>{currency.label}</option>)
                                }
                              </select>
                            </span> 
                          </div>
                      </div>
                    </div>  
                      <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <select id="cardType" className="custom-select" required value={depositMethod} onChange={this.changeDepositMethod.bind(this)}>
                          <option value="">Select Payment Method</option>
                          {
                            depositMethodOptions.map((o)=>(
                              <option value={o.value} key={o.value}>{o.label}</option>
                            ))
                          }
                        </select>
                      </div>
                      {/* <p className="text-muted mt-4">Transactions fees <span className="float-right d-flex align-items-center"><del>1.00 USD</del> <span className="bg-success text-1 text-white font-weight-500 rounded d-inline-block px-2 line-height-4 ml-2">Free</span></span></p>
                      <hr/>
                      <p className="font-weight-500">You'll deposit <span className="text-3 float-right">1,000.00 USD</span></p> */}
                      {depositMethod === "paypal" && <Button 
                        id="paypal-button"
                        className="btn btn-primary btn-block"></Button>}
                      {depositMethod === "stripe" && <StripeCheckout
                        stripeKey={config.STRIPE_PUB_KEY}
                        token={this.handleStripe}
                        billingAddress={false}
                        shippingAddress={false}
                        amount={depositAmount * 100}
                        name={"Greenbay Transfer"}
                        // name="GreenBay"
                        image="http://www.greenbaydonation.com/static/media/greenbay_logo.680c8b1e.png"
                        label="Deposit"
                        email={currentUser.user?currentUser.user.email:""}
                        // email="admin@greenbaygiveback.com"
                        currency={depositCurrency}
                        zipCode={false}
                    >
                        <Button 
                        className="btn btn-primary btn-block" disabled={processing} onClick={this.onOpenedStripePopup.bind(this)}>{processing?'Processing...':'Deposit'}</Button>
                    </StripeCheckout>}
                    {depositMethod === "bank" &&<p className="text-center">Coming Soon!</p>}
                    </Form>
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
    currencies: state.payment.currencies,
  };
}
let mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...paymentAction}, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(DepositMoney);