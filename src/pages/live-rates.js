import React, { Component } from 'react'
import api from '../services/api'
import DetailModal from '../components/detailtrmodal'
import { connect } from 'react-redux';
import moment from 'moment'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import leftPad from 'left-pad';
import { CSVLink, CSVDownload } from "react-csv";
import * as paymentAction from '../actions/payment';
import { bindActionCreators } from 'redux';

const defaultCurrencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
];

class LandingPageFee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveRate: [],
      selectedOption: null,
      recipientCurrency: 'USD',
      setLoading: false,
      currentUser: JSON.parse(localStorage.currentUser),
    };
  }
  
  componentDidMount() {
    this.props.actions.getCurrencies();
    this.props.actions.getMyWallet();
    this.props.actions.getUsers()
    this.firstRates(this.state.recipientCurrency);

  }
    firstRates(value){
      api.getExchangeRate(value, (err, res) => {
        if (err == null && res.error == null) {
            this.setState({ liveRate: res.rates })
        }
    })  
  }
  getRates(e) {
        this.setState({setLoading: true});
        this.setState({recipientCurrency: e.target.value});
       
        api.getExchangeRate(e.target.value, (err, res) => {
            if (err == null && res.error == null) {
                console.log('this is getExchangeRate', res);
                this.setState({ liveRate: res.rates })
            }
        })  
        this.state.setLoading = false
  }
  render() {
    const { liveRate, currentUser, recipientCurrency } = this.state;
    const { currencies } = this.props;
    var currencyOptions = currencies.length > 0 ? currencies.map(o => {
      return {
        value: o.unit,
        label: o.name
      }
    }) : defaultCurrencyOptions;
    console.log('transactions----currentUser.user.image----', currentUser, liveRate)
    return (
      <div id="content" className="py-4">
        <div className="container">
        <h2 className="font-weight-400 text-center mt-3 mb-4" >Live Rates</h2>

          <div className="row">
            <div className="col-lg-8 mx-auto" >
             
              <div className="row pr-3">
                <div className="rate-cover w-100">
                  
                    <h3 class="text-5 font-weight-400 mt-2 mx-1">Base Currency:</h3>
                    <div className="input-group-append col-lg-4"> <span className="input-group-text p-0">
                          <select
                            value={recipientCurrency}
                            onChange={this.getRates.bind(this)}
                            data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-size form-control bg-transparent" required="">
                            {
                              currencyOptions.map((currency) => <option value={currency.value}>{currency.label}</option>)
                            }
                          </select>
                        </span> </div>
                    </div>
                  </div>
           
              <div className="bg-light shadow-sm rounded py-3 mb-4">
                <p className="text-5 font-weight-400 d-flex align-items-center px-4 mb-1 mx-4" style={{ display: "flex", justifyContent: "space-between" }}>All Rates
                </p>
                <div className="transaction-title py-2 px-4">
                  <div className="row">
                    <div className="col-6 col-sm-6 text-center"><span className="">Currency Name</span></div>
                    <div className="col-6 col-sm-6 text-center">Rates</div>
                  </div>
                </div>
                <div>
                  {
                    this.state.loading &&
                    <div id="preloader">
                      <div data-loader="dual-ring"></div>
                    </div>
                  }
                  {
                    (liveRate.length === 0) && (!this.state.loading) &&
                    <div style={{ marginTop: 16 }}><h3 className="text-4 text-muted font-weight-300 text-center">No Transactions</h3></div>
                  }
                  {
                    
                    (Object.keys(liveRate)).sort().map((item, index) => {
                      console.log('this is  Object.keys(liveRate)',  Object.keys(liveRate));
                      return (
                        <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                          <div className="row align-items-center flex-row">
                            <div className="col-6 col-sm-6 text-center">{item}</div>
                            <div className="col-6 col-sm-6 text-center">{liveRate[item].toFixed(3)}</div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailModal ref="detail_modal" />
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