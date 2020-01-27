import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select';
import { connect } from 'react-redux';
import * as paymentAction from '../actions/payment';
import api from '../services/api'
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';

const defaultCurrencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
];


class LandingPageFee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      sendAmount: 100,
      recipientAmount: 95,
      sendCurrency: 'USD',
      recipientCurrency: 'USD',
      fee: "5.00",
      isWaiting: false,
      currentUser: JSON.parse(localStorage.currentUser),
    };
  }
  // getRecipientsAll() {
  //   api.getUsers((err, res) => {
  //     this.setState({ recipients: res.result })
  //     console.log('send-money-getRecipientsAll-recipientOption----', res)
  //   })
  // }
  componentDidMount() {
    // this.props.actions.getFamilyFriend();
    this.props.actions.getCurrencies();
    this.props.actions.getMyWallet();
    //   this.getRecipientsAll();
    this.props.actions.getUsers()

  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  sendMoney(e) {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    let { sendCurrency, sendAmount, recipientCurrency, recipientAmount, selectedOption, fee } = this.state
    console.log('jacky problem---', sendCurrency, sendAmount, recipientCurrency, recipientAmount, selectedOption, fee)
    this.props.history.push('/send-money-confirm', {
      param: {
        sendCurrency: sendCurrency,
        recipientCurrency: recipientCurrency,
        user: selectedOption,
        sendAmount: Number(sendAmount),
        recipientAmount: Number(recipientAmount),
        fee: fee,
      }
    })
  }

  changeSendCurrency(e) {
    this.state.sendCurrency = e.target.value
    this.setState({
      sendCurrency: e.target.value
    });

    //calc fee
    this.refreshRecipient();
  }

  changeSendAmount(bRefresh, e) {
    // if(e.target.value == this.state.sendAmount) return
    console.log('changeSendAmount', e.target.value)
    this.state.sendAmount = e.target.value
    this.setState({
      sendAmount: e.target.value
    })

    if (bRefresh) {
      //calc fee
      this.refreshRecipient()
    }
  }

  changeRecipientAmount(bRefresh, e) {
    // if(e.target.value == this.state.recipientAmount) return
    console.log('changeRecipientAmount', e.target.value)
    this.state.recipientAmount = e.target.value
    this.setState({
      recipientAmount: e.target.value
    })

    if (bRefresh) {
      //calc fee
      this.refreshSend()
    }
  }

  changeRecipientCurrency(e) {
    this.state.recipientCurrency = e.target.value
    this.setState({
      recipientCurrency: e.target.value
    })

    //calc fee
    this.refreshSend()
  }

  refreshRecipient() {
    let { sendCurrency, sendAmount, recipientCurrency } = this.state
    if (Number(sendAmount) == 0) {
      this.setState({ recipientAmount: 0, fee: 0 })
    }
    else {
      this.setState({ isWaiting: true })
      api.calcFee({
        data: {
          from_currency: sendCurrency,
          to_currency: recipientCurrency,
          send_amount: Number(sendAmount),
          receive_amount: 0
        }
      }, (err, res) => {
        console.log('api on calc----', err, res)
        this.setState({ isWaiting: false })

        if (err == null && res.error == null) {
          this.setState({ recipientAmount: res.result.receive_amount, fee: (res.result.fee.toFixed(2)).toString() })
        }
      })
    }
  }

  refreshSend() {
    let { sendCurrency, recipientCurrency, recipientAmount } = this.state
    if (Number(recipientAmount) == 0) {
      this.setState({ sendAmount: 0, fee: 0 })
    }
    else {
      this.setState({ isWaiting: true })
      api.calcFee({
        data: {
          from_currency: sendCurrency,
          to_currency: recipientCurrency,
          send_amount: 0,
          receive_amount: Number(recipientAmount),
        }
      }, (err, res) => {
        console.log('api on calc----', err, res)
        this.setState({ isWaiting: false })

        if (err == null && res.error == null) {
          this.setState({ sendAmount: res.result.send_amount, fee: (res.result.fee.toFixed(2)).toString() })
        }
      })
    }
  }

  render() {
    const { selectedOption, currentUser, sendAmount, recipientAmount, sendCurrency, recipientCurrency, fee, isWaiting } = this.state;
    const { currencies, wallet, recipients } = this.props;
    var recipientOption = recipients.map((o) => {
      return {
        value: o.id,
        label: o.name
      }
    })
    var recipientOptions = recipientOption.filter(recipientOption => recipientOption.value !== currentUser.user.id);
    var currencyOptions = currencies.length > 0 ? currencies.map(o => {
      return {
        value: o.unit,
        label: o.name
      }
    }) : defaultCurrencyOptions;

    /*
    let isValidForSend = false
    if (!isWaiting && sendAmount > 0 && selectedOption != null) {
      isValidForSend = true
    }
    */

    let isMoneyValidForSend = false
    if (!isWaiting && sendAmount <= 0) {
      isMoneyValidForSend = true
    }
    wallet.length > 0 && wallet.map((item, index) => {
      if (this.state.sendCurrency === item.currency) {
        if (sendAmount >= item.balance) {
          isMoneyValidForSend = true
        }
      }
    })

    let isRecipientVaildForSend = false
    if (!isWaiting && selectedOption == null) {
      isRecipientVaildForSend = true
    }

    let isValidForSend = false
    if (!isMoneyValidForSend && !isRecipientVaildForSend && !isWaiting) {
      isValidForSend = true
    }
    return (
      <div id="content" className="py-4">
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3">Send Money</h2>
          <p className="text-4 text-center mb-4">Send your money on anytime, anywhere in the world.</p>
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
              <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                <h3 className="text-5 font-weight-400 mb-3">Personal Details</h3>
                <div id="form-send-money" method="post">
                  <div className="form-group">
                    {/* <label for="emailID">Recipient</label>*/}
                    <p className="mb-1">Recipient{isRecipientVaildForSend && <span className="text-danger text-2 float-right">Recipient not selected. </span>}</p>
                    <Select
                      placeholder="Select a Family or Friend"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={recipientOptions}
                    />
                  </div>
                  <div className="form-group">
                    {/*<label for="youSend">You Send</label>*/}
                    <p className="mb-1">You Send{isMoneyValidForSend && <span className="text-danger text-2 float-right" visible="false">The value must be in the range of 0 to the wallet.</span>}</p>
                    <div className="input-group">
                      <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                      <input type="text" className="form-control"
                        data-bv-field="youSend" id="youSend"
                        type="number"
                        value={sendAmount}
                        onChange={this.changeSendAmount.bind(this, false)}
                        onBlur={this.changeSendAmount.bind(this, true)}
                        placeholder="" />
                      <div className="input-group-append">
                        <span className="input-group-text p-0">
                          <select
                            value={sendCurrency}
                            onChange={this.changeSendCurrency.bind(this)}
                            data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                            {
                              currencyOptions.map((currency) => <option value={currency.value}>{currency.label}</option>)
                            }
                          </select>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="recipientGets">Recipient Gets</label>
                    <div className="input-group">
                      <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                      <input type="text" className="form-control"
                        type="number"
                        onChange={this.changeRecipientAmount.bind(this, false)}
                        onBlur={this.changeRecipientAmount.bind(this, true)}
                        data-bv-field="recipientGets" id="recipientGets"
                        value={recipientAmount} placeholder="" />
                      <div className="input-group-append"> <span className="input-group-text p-0">
                        <select
                          value={recipientCurrency}
                          onChange={this.changeRecipientCurrency.bind(this)}
                          data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                          {
                            currencyOptions.map((currency) => <option value={currency.value}>{currency.label}</option>)
                          }
                        </select>
                      </span> </div>
                    </div>
                  </div>
                  <hr />
                  {/* <p className="text-muted text-center">The current exchange rate is <span className="font-weight-500">1 USD = 1.42030 AUD</span></p> */}
                  <p className="mb-1">Total fees <span className="text-3 float-right">{fee} {sendCurrency}</span></p>
                  <div className="form-group">
                  </div>
                  {/* <p className="font-weight-500">Total To Pay <span className="text-3 float-right">1,000.00 USD</span></p> */}
                  <button className="btn btn-primary btn-block"
                    disabled={!isValidForSend}
                    onClick={this.sendMoney.bind(this)}
                  > Continue
                  </button>
                  {/*} <p className="mb-1 text-danger">Recipient not selected. </p>
                  <p className="mb-1 text-danger">Your Send momey is false. </p>*/}
                </div>
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
    recipients: state.payment.allusers,
    currencies: state.payment.currencies,
    wallet: state.payment.wallet,
    fetchingWallet: state.payment.fetchingWallet,
  };
}
let mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...paymentAction }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageFee);
