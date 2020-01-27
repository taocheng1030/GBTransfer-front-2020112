import React, { Component } from 'react'
import api from '../services/api'
import EditModal from "../components/editmodal"
import DetailModal from '../components/detailtrmodal'
import moment from 'moment'
import { login, logout } from '../actions/auth';
import { connect } from 'react-redux';

class LandingPageFee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usdBalance: 0,
      euroBalance: 0,
      gbpBalance: 0,
      transactions: [],
      toDate: new Date(),
      currentUser: {
        user: {}
      },
    }

  }
  componentDidMount() {
    let { currentUser } = this.state
    if(!!localStorage.currentUser){
      
      var savedUser = JSON.parse(localStorage.currentUser)
      if(savedUser.user==null){
        this.props.history.push('/')
        window.location.reload(true)
      }
    }
    else{
      this.props.history.push('/')
      window.location.reload(true)
    }
    
    this.setState({ loading: true })
    this.refreshProfile()
    this.getBalance()
  }

  getBalance() {
    api.getMyWallet((error, res) => {
      if (error) { return }
      var result = res.result
      try {
        for (var i = 0; i < result.length; i++) {
          console.log('resi===', res[i])
          if (result[i].currency == "EUR") { this.setState({ euroBalance: result[i].balance }) }
          if (result[i].currency == "USD") { this.setState({ usdBalance: result[i].balance }) }
          if (result[i].currency == "GBP") { this.setState({ gbpBalance: result[i].balance }) }
        }
      } catch (e) { console.log("e on try-==", e) }
    })
  }
  fetchData(from, to, pageNum) {
    let { currentUser, loading } = this.state
    this.setState({ loading: true })
    api.getTransactions({
      from,
      to,
      userId: currentUser.user.id,
      pageNum,
      pageSize: 5,
      receiverName: "",
      blockchainTxId: ""
    }, (err, res) => {
      this.setState({ transactions: res.result })
      this.setState({ loading: false })
    })
  }
  refreshProfile() {
    var savedUser = JSON.parse(localStorage.currentUser)
    api.getUser(savedUser.user.id, (error, res) => {
      if (error) {
        return
      }
      let { currentUser } = this.state
      currentUser.user = res.result
      this.setState({ currentUser })
      this.setState({ currentUser }, () => {
        this.fetchData(moment('Jan 01 2000').format("YYYY-MM-DD hh:mm:ss"), moment(this.state.toDate).format("YYYY-MM-DD hh:mm:ss"), 1)
      })
    })
  }
sendProfile(){
  console.log('this is sendProfile')
  window.location = '/profile'
  }
  render() {
    let { currentUser, usdBalance, euroBalance, gbpBalance, transactions } = this.state
    let paymentdir = "Received"
    let displayAmount = 0
    let username = currentUser && currentUser.user && currentUser.user.name
    return (
      <div id="content" className="py-4">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3">
              <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                <div className="profile-thumb mt-3 mb-4">
                  {
                    <img onClick={this.sendProfile.bind()} className="rounded-circle" src={(!!currentUser) && (!!currentUser.user) && currentUser.user.image} style={{ width: 90, height: 90 }} alt="" />
                  }
                </div>
                <p className="text-3 font-weight-500 mb-2">Hello, {currentUser && currentUser.user && currentUser.user.name}</p>
                {/* <p className="mb-2"><a href="/profile" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p> */}
              </div>
              <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
                <h6 className="text-4 font-weight-400 h6">USD<span className="font-weight-bold ml-2">{usdBalance.toFixed(2)}</span></h6>
                <h6 className="text-4 font-weight-400 h6">EUR<span className="font-weight-bold ml-2">{euroBalance.toFixed(2)}</span></h6>
                <h6 className="text-4 font-weight-400 h6">GBP<span className="font-weight-bold ml-2">{gbpBalance.toFixed(2)}</span></h6>
                <p className="mb-2 text-muted opacity-8">Available Balance</p>
                <hr className="mx-n3" />
                <div className="d-flex"><a href="#" className="btn-link mr-auto">Withdraw</a> <a href="#" className="btn-link ml-auto">Deposit</a></div>
              </div>
              {/* <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
                <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
                <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
                  Our experts are here to help!.</p> */}
                {/* <a href="#" className="btn btn-primary btn-block">Chate with Us</a>  */}
              {/* </div> */}
            </aside>
            <div className="col-lg-9">
              <div className="bg-light shadow-sm rounded p-4 mb-4">
                <h3 className="text-5 font-weight-400 d-flex align-items-center mb-3">Profile Status <span className="bg-light-4 text-success rounded px-2 py-1 font-weight-400 text-2 ml-2"></span></h3>
                <div className="row profile-completeness">
                  <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-mobile-alt"></i></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fas fa-check-circle"></i></span>
                      <p className="mb-0">Mobile Added</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-envelope"></i></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fas fa-check-circle"></i></span>
                      <p className="mb-0">Email Added</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 mb-4 mb-sm-0">
                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-credit-card"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle "></i></span>
                      <p className="mb-0"><a className="btn-link stretched-link" href="">Add Card</a></p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-university"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle "></i></span>
                      <p className="mb-0"><a className="btn-link stretched-link" href="">Add Bank Account</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light shadow-sm rounded py-4 mb-4">
                <h3 className="text-5 font-weight-400 d-flex align-items-center px-4 mb-3">Recent Activity</h3>
                <div>

                  <div className="transaction-title py-2 px-4">
                    <div className="row">
                      <div className="col-2 col-sm-1 text-center"><span className="">Date</span></div>
                      <div className="col col-sm-3 ">Username</div>
                      <div className="col col-sm-1 text-center">Type</div>
                      <div className="col col-sm-4 text-center">Blockchain ID</div>
                      <div className="col-auto col-sm-1 d-none d-sm-block text-center">Status</div>
                      <div className="col-3 col-sm-2 text-center">Amount</div>
                    </div>
                  </div>
                  <div className="transaction-list">
                    {
                      this.state.loading &&
                      <div id="preloader">
                        <div data-loader="dual-ring"></div>
                      </div>
                    }
                    {
                      (transactions.length === 0) && (!this.state.loading) &&
                      <div style={{ marginTop: 16 }}><h3 className="text-4 font-weight-300 text-center">No Transactions</h3></div>
                    }
                    {
                      this.state.transactions.map((item, index) => {
                        if (currentUser.user.name === item.receiver) {
                          paymentdir = "Received"
                          displayAmount = item.receiveAmount
                        }
                        else {
                          paymentdir = "Sent"
                          displayAmount = item.sendAmount * (-1)
                        }
                        return (
                          <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail" onClick={() => { this.refs.detail_modal.openModal(item) }}>
                            <div className="row align-items-center flex-row">
                              <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">{moment(item.createdAt).format("DD")}</span> <span className="d-block text-1 font-weight-300 text-uppercase">{moment(item.createdAt).format("MMM")}</span> </div>
                              <div className="col col-sm-3"> <span className="d-block text-4">{item.receiver}</span> <span className="text-muted">Payment {paymentdir}</span> </div>
                              <div className="col col-sm-1"> <span className="d-block text-2">{item.type}</span> </div>
                              <div className="col col-sm-4"> <a href={`http://bluebarricade-blockchain-explorer.s3-website.us-east-2.amazonaws.com/#/transactions/${item.blockchaintxid}`} target="_blank"><span className="d-block text-4">{item.blockchaintxid.substring(0, 20) + '...'}</span></a></div>
                              {/* <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-toggle="tooltip" data-original-title="Cancelled"><i className="fas fa-times-circle"></i></span> </div> */}
                              <div className="col-auto col-sm-1 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                              <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">{Number(displayAmount).toFixed(2)}</span> <span className="text-2 text-uppercase">({item.receiveCurrency})</span> </div>
                            </div>
                          </div>
                        )
                      })
                    }

                  </div>
                  
                  <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="row no-gutters">
                            <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                              <div className="my-auto text-center">
                                <div className="text-17 text-white my-3"><i className="fas fa-building"></i></div>
                                <h3 className="text-4 text-white font-weight-400 my-3">Envato Pty Ltd</h3>
                                <div className="text-8 font-weight-500 text-white my-4">$557.20</div>
                                <p className="text-white">15 March 2019</p>
                              </div>
                            </div>
                            <div className="col-sm-7">
                              <h5 className="text-5 font-weight-400 m-3">Transaction Details
                                  <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                              </h5>
                              <hr />
                              <div className="px-3">
                                <ul className="list-unstyled">
                                  <li className="mb-2">Payment Amount <span className="float-right text-3">$562.00</span></li>
                                  <li className="mb-2">Fee <span className="float-right text-3">-$4.80</span></li>
                                </ul>
                                <hr className="mb-2" />
                                <p className="d-flex align-items-center font-weight-500 mb-4">Total Amount <span className="text-3 ml-auto">$557.20</span></p>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Paid By:</li>
                                  <li className="text-muted">Envato Pty Ltd</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Transaction ID:</li>
                                  <li className="text-muted">26566689645685976589</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Description:</li>
                                  <li className="text-muted">Envato March 2019 Member Payment</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Status:</li>
                                  <li className="text-muted">Completed</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4"><a href="/transactions" className="btn-link text-3">View all<i className="fas fa-chevron-right text-2 ml-2"></i></a></div>
              </div>
            </div>
          </div>
        </div>
        <DetailModal ref="detail_modal" />
      </div>
    )
  }
}


// let mapStateToProps = (state) => {
//   return {
//     login: state.authContent.login
//   };
// }
// let mapDispatchToProps = (dispatch) => {
//   return {
//       onLogin: () => dispatch(login()),
//       onLogout: () => dispatch(logout())
//   }
// }

// LandingPageFee = connect(mapStateToProps,mapDispatchToProps)(LandingPageFee);


export default LandingPageFee