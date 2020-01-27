import ReactCountryFlag from "react-country-flag"
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import api from '../services/api'
import { isTemplateElement } from "@babel/types"

import { connect } from 'react-redux';
import * as paymentAction from '../actions/payment';
import { bindActionCreators } from 'redux';

const CurrencyToCountry = [];
CurrencyToCountry['GBP'] = 'gb'//denmark
CurrencyToCountry['USD'] = 'us'//us
CurrencyToCountry['SEK'] = 'se'//
CurrencyToCountry['CAD'] = 'ca'//canada
CurrencyToCountry['CNY'] = 'cn'//china
CurrencyToCountry['HKD'] = 'hk'//hongkong
CurrencyToCountry['DKK'] = 'dk'//denmark
CurrencyToCountry['IDR'] = 'in'//india
CurrencyToCountry['SGD'] = 'sg'//singapore
CurrencyToCountry['TWD'] = 'tw'//taiwan
CurrencyToCountry['EUR'] = 'eu'//europe


class WalletMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maincurrency: "EUR",
      allcurrency: 0,
    };
  }

  componentDidMount() {
    console.log('componet Didmont');
    this.props.actions.getCurrencies();
    this.props.actions.getMyWallet();
    //setTimeout(this.calculateWallet(), 15000);
    //this.calculateWallet();
  }

  calculateWallet() {
    let { wallet, currencies } = this.props;
    let total = 0;
    console.log("calc-wallet", wallet, "calc-currencies", currencies);
    currencies && wallet && wallet.map((item, index) => {
      if (currencies[index].rate==null)  {currencies[index].rate = "1"}
      total += item.balance / currencies[index].rate;
    });
    console.log("calc-wallet", wallet, "calc-currencies", currencies);
    //this.setState({ allcurrency: total });
    return total;
  }

  render() {
    console.log("reder- wallet", this.props.wallet, "render- currencies", this.props.currencies);
    let { wallet, fetchingWallet } = this.props;
    let total = this.calculateWallet();
    return (
      <div id="content" className="py-4" >
        <div className="container">
          <h2 className="font-weight-400 text-center mt-3 mb-4">Wallet balance</h2>
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
              <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                <div className="text-center p-4 rounded mb-4">
                  {wallet.length === 0 && fetchingWallet && <p className="text-10 text-primary">Loading...</p>}
                  {wallet.length === 0 && !fetchingWallet && <div>
                    <h3 className="text-10 text-white font-weight-400">No Balance</h3>
                  </div>}
                  {wallet.length > 0 && <h3 className="text-10 text-black font-weight-400">‎{total.toFixed(2)}  EUR</h3>}
                  {wallet.length > 0 && <p className="text-black">Estimated total of all currencies</p>}
                  {/*} <a href="" className="btn btn-outline-primary btn-sm shadow-none rounded-pill text-3 font-weight-500">Transfer funds</a>*/}
                </div>
                {
                  wallet.length > 0 && wallet.map((item, index) => {

                    if (this.state.maincurrency === item.currency) {
                      return (
                        <div>
                          <p className="font-weight-500" > <ReactCountryFlag styleProps={{ width: '30px', height: '30px', marginRight: '10px' }} code={CurrencyToCountry[item.currency]} svg />{item.currency} < span className="bg-success text-1 text-white font-weight-500 rounded d-inline-block px-2 line-height-4 ml-2" > PRIMARY</span> <span className="text-3 float-right">{item.balance.toFixed(2)} {item.currency}</span></p>
                          <hr />
                        </div>
                      )
                    }
                    else {
                      return (
                        <div>
                          <p className="font-weight-500" style={{ position: 'relative' }}>
                            <ReactCountryFlag styleProps={{ width: '30px', height: '30px', marginRight: '10px' }} code={CurrencyToCountry[item.currency]} svg />{item.currency} <span className="text-3 float-right">{item.balance.toFixed(2)} {item.currency}</span>
                          </p>
                          <hr />
                        </div>
                      )
                    }
                  })
                  
                }
                {wallet.length > 0 && <p className="text-2 font-weight-400 text-center">Ues your balance to shop, send payments, or transfer it to your bank account.</p>}
                {wallet.length > 0 && <hr />}
              </div>
            </div>
          </div>
        </div >
      </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(WalletMoney)
