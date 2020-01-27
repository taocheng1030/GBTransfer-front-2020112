import React, { Component } from 'react'
import api from '../services/api'
import DetailModal from '../components/detailtrmodal'
import moment from 'moment'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import leftPad from 'left-pad';
import { CSVLink, CSVDownload } from "react-csv";


const exportHeader = [
  { label: "Date", key: "exportcreatedTime" },
  { label: "Receiver", key: "exportreceiver" },
  { label: "Sent/Receive", key: "paymentdir" },
  { label: "Type", key:"exporttype"},
  { label: "BlockchainID", key: "exportblockchaintxid" },
  { label: "Status", key: "exportstatus" },
  { label: "Amount", key: "displayAmount" },
  { label: "currency", key: "exportreceiveCurrency" },
];

const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

class LandingPageFee extends Component {
  constructor(props) {
    super(props)
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    this.state = {
      transactions: [],
      exportTransactions: [],
      currentUser: null,
      startDate: d,
      toDate: new Date(),
      loading: false,
      totalNumOfPages: 1,
      usdBalance: 0,
      euroBalance: 0,
      gbpBalance: 0,
      blockchainID: "",
      receiverName: "",
      exportCSV: []

    }

  }
  changeStartDate(startDate) {
    this.setState({ startDate })
  }
  changeEndDate(toDate) {
    this.setState({ toDate })
  }

  setPeriod(days) {
    var startDate = moment().add(days * (-1), 'days');
    var toDate = moment();
    this.setState({
      startDate,
      toDate
    })
  }

  fetchData(from, to, receiverName, blockchainTxId, pageNum) {
    let { currentUser, loading, exportCSV } = this.state
    let exportCSVfech = []
    let paymentdir = "Received"
    let displayAmount = 0
    let exportcreatedTime
    let exportreceiver
    let exportblockchaintxid
    let exportreceiveCurrency
    let exportstatus
    let exporttype
    this.setState({ loading: true })
   
    // from.setMinutes(0); from.setSeconds(0);
    // to.setHours(23); 
    // to.setMinutes(59); 
    // to.setSeconds(59);
    console.log('this is from to', from, to );
    api.getTransactions({
      from,
      to,
      userId: currentUser.user.id,
      pageNum,
      pageSize: 20,
      receiverName,
      blockchainTxId
    }, (err, res) => {
      this.setState({ transactions: res.result })
      this.setState({ totalNumOfPages: res.total })
      this.setState({ loading: false })
      api.getTransactionsForExport({
        from,
        to,
        userId: currentUser.user.id,
        pageNum,
        pageSize: 20,
        receiverName,
        blockchainTxId
      }, (err, res1) => {
        res1.result.map((item, index) => {
          if (currentUser.user.name === item.receiver) {
            paymentdir = "Received"
            displayAmount = item.receiveAmount
          }
          else {
            paymentdir = "Sent"
            displayAmount = item.sendAmount * (-1)
          }
          exportcreatedTime = moment(item.createdAt).format("YYYY[-]MM[-]DD")
          exportreceiver = item.receiver
          exporttype=item.type
          exportblockchaintxid = item.blockchaintxid
          exportstatus = "success"
          exportreceiveCurrency = item.receiveCurrency
          exportCSVfech[index] = { exportcreatedTime, exportreceiver, paymentdir, exporttype, exportblockchaintxid, exportstatus, displayAmount, exportreceiveCurrency }
        })
        this.setState({ exportCSV: exportCSVfech })
      })
    })

  }

  componentDidMount() {
    let { currentUser } = this.state
    this.getBalance()
    currentUser = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : {}
    this.setState({ currentUser }, () => {
      this.fetchData(moment(this.state.startDate).format("YYYY-MM-DD 00:00:00"), moment(this.state.toDate).format("YYYY-MM-DD 23:59:59"), this.state.receiverName, this.state.blockchainID, 1)
    })
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
  handlePageClick = data => {
    let selected = data.selected;
    this.fetchData(moment(this.state.startDate).format("YYYY-MM-DD 00:00:00"), moment(this.state.toDate).format("YYYY-MM-DD 23:59:59"), this.state.receiverName, this.state.blockchainID, selected + 1)
  };
  changeReceiver(e) {
    this.setState({
      receiverName: e.target.value
    })
  };
  changeBlockchainID(e) {
    this.setState({
      blockchainID: e.target.value
    })
  };
  sendProfile(){
    console.log('this is sendProfile')
    window.location = '/profile'
    }
  render() {
    let { startDate, toDate, currentUser, usdBalance, euroBalance, gbpBalance, totalNumOfPages, receiverName, blockchainID, exportCSV, exportTransactions, transactions } = this.state
    let paymentdir = "Received"
    let displayAmount = 0
    let username = currentUser && currentUser.user && currentUser.user.name
    let exportFilename = username + "_transactions_" + moment(startDate).format("YYYY[-]MM[-]DD") + "_" + moment(toDate).format("YYYY[-]MM[-]DD") + ".csv"
    console.log('transactions----currentUser.user.image----', currentUser, transactions)
    return (
      <div id="content" className="py-4">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3">
              <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                <div className="profile-thumb mt-3 mb-4">
                  {
                    (currentUser&&currentUser.user&&currentUser.user.image) ? <img onClick={this.sendProfile.bind()} className="rounded-circle" src={(!!currentUser) && currentUser.user.image} style={{ width: 90, height: 90 }} alt="" /> : <i onClick={this.sendProfile.bind()} className="text-20 text-light fas fa-user-circle" ></i>
                    
                  }
                  {/* <div className="profile-thumb-edit custom-file bg-primary text-white" data-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute"></i>
                        <input type="file" className="custom-file-input" id="customFile"/>
                      </div> */}
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
                <div className="d-flex"><a href="/withdraw-money" className="btn-link mr-auto">Withdraw</a> <a href="/deposit-money" className="btn-link ml-auto">Deposit</a></div>
              </div>
              {/* <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
                <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
                <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
                  Our experts are here to help!.</p>
                {/* <a href="#" className="btn btn-primary btn-block">Chate with Us</a>  
              </div> */}
            </aside>
            <div className="col-lg-9">
              <h2 className="font-weight-400 mb-3">Transactions</h2>
              <div className="row pr-3">
                <div className="filter-cover w-100">
                  <span style={{ marginRight: 8 }}>Date</span>
                  <DatePicker
                    selected={startDate}
                    maxDate={null}
                    onChange={this.changeStartDate.bind(this)}
                    className='form-control2'
                  />
                  <span style={{ marginLeft: 8, marginRight: 8 }}>~</span>
                  <DatePicker
                    selected={toDate}
                    minDate={null}
                    onChange={this.changeEndDate.bind(this)}
                    className='form-control2'
                  />
                  <div style={{ width: '100%' }}>
                    <div className="row w-100" style={{ margin: '0px' }}>
                      <div className="col-sm-3" style={{ padding: '0px', margin: '0px', paddingLeft: '20px' }}>
                        <input type="text" style={{ height: 35, width: '100%', paddingLeft: '5px' }} id="receiverName" value={receiverName} placeholder="Username..." onChange={this.changeReceiver.bind(this)} />
                      </div>
                      <div className="col-sm-6" style={{ padding: '0px', margin: '0px', paddingLeft: '20px' }}>
                        <input type="text" style={{ height: 35, width: '100%', paddingLeft: '5px' }} id="blockchainID" value={blockchainID} placeholder="Blockchain ID..." onChange={this.changeBlockchainID.bind(this)} />
                      </div>
                      <div className="col-sm-3" style={{ padding: '0px', margin: '0px', paddingLeft: '20px' }}>
                        <div className="btn transfer-button" style={{ cursor: 'pointer', height: 35, }}
                          onClick={() => {this.fetchData(moment(this.state.startDate).format("YYYY-MM-DD 00:00:00"), moment(this.state.toDate).format("YYYY-MM-DD 23:59:59"), this.state.receiverName, this.state.blockchainID, 1)
                                            console.log('this is this.state.startDate', this.state.startDate, this.state.toDate)}}>
                          Filter</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="container">
                    <div className="row">
                      <div className="col-sm-3" >
                        <div style={{ paddingLeft: 20 }}>
                          <input type="text" style={{ paddingLeft: 20, height: 35 }} id="receiverName" value={receiverName} placeholder="Receiver..." onChange={this.changeReceiver.bind(this)} />
                        </div>
                      </div>
                      <div className="col-sm-6" >
                        <div style={{ paddingLeft: 20 }}>
                          <input type="text" style={{ paddingLeft: 10, height: 35 }} id="blockchainID" value={blockchainID} placeholder="Blockchain ID..." onChange={this.changeBlockchainID.bind(this)} />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div style={{ paddingLeft: 20 }}>
                          <div className="btn transfer-button" style={{ cursor: 'pointer', height: 35, }} onClick={() => this.fetchData(moment(this.state.startDate).format("YYYY-MM-DD hh:mm:ss"), moment(this.state.toDate).format("YYYY-MM-DD hh:mm:ss"), 1)}>Filter</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="bg-light shadow-sm rounded py-3 mb-4">
                <p className="text-5 font-weight-400 d-flex align-items-center px-4 mb-1" style={{ display: "flex", justifyContent: "space-between" }}>All Transactions
                <CSVLink className="text-2 btn transfer-button" style={{ cursor: 'pointer', width: 60, height: 20, marginLeft: 20 }}
                    headers={exportHeader}
                    data={exportCSV}
                    filename={exportFilename}
                    target="_blank">
                    Export
                </CSVLink>
                </p>
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
                <div>
                  {
                    this.state.loading &&
                    <div id="preloader">
                      <div data-loader="dual-ring"></div>
                    </div>
                  }
                  {
                    (transactions.length === 0) && (!this.state.loading) &&
                    <div style={{ marginTop: 16 }}><h3 className="text-4 text-muted font-weight-300 text-center">No Transactions</h3></div>
                  }
                  {
                    transactions.map((item, index) => {
                      if (currentUser.user.name === item.receiver) {
                        paymentdir = "Received"
                        displayAmount = item.receiveAmount
                      }
                      else {
                        paymentdir = "Sent"
                        displayAmount = item.sendAmount * (-1)
                      }
                      return (
                        <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                          <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center" onClick={() => { this.refs.detail_modal.openModal(item) }}> <span className="d-block text-4 font-weight-300">{moment(item.createdAt).format("DD")}</span> <span className="d-block text-1 font-weight-300 text-uppercase">{moment(item.createdAt).format("MMM")}</span> </div>
                            <div className="col col-sm-3" onClick={() => { this.refs.detail_modal.openModal(item) }}> <span className="d-block text-4">{item.receiver}</span> <span className="text-muted">Payment {paymentdir}</span> </div>
                            <div className="col col-sm-1" onClick={() => { this.refs.detail_modal.openModal(item) }}> <span className="d-block text-2">{item.type}</span> </div>
                            <div className="col col-sm-4"> <a href={`http://bluebarricade-blockchain-explorer.s3-website.us-east-2.amazonaws.com/#/transactions/${item.blockchaintxid}`} target="_blank"><span className="d-block text-4">{item.blockchaintxid.substring(0, 20) + '...'}</span></a></div>
                            {/* <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-toggle="tooltip" data-original-title="Cancelled"><i className="fas fa-times-circle"></i></span> </div> */}
                            <div className="col-auto col-sm-1 d-none d-sm-block text-center text-3" onClick={() => { this.refs.detail_modal.openModal(item) }}> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-right text-4" onClick={() => { this.refs.detail_modal.openModal(item) }}> <span className="text-nowrap">{Number(displayAmount).toFixed(2)}</span> <span className="text-2 text-uppercase">({item.receiveCurrency})</span> </div>
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
                {
                  (transactions.length > 0) &&
                  <div className="paginator-cover">
                    <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      pageCount={totalNumOfPages}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={totalNumOfPages}
                      onPageChange={this.handlePageClick}
                      breakClassName={'page-item'}
                      breakLinkClassName={'page-link'}
                      containerClassName={'pagination'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousClassName={'page-item'}
                      previousLinkClassName={'page-link'}
                      nextClassName={'page-item'}
                      nextLinkClassName={'page-link'}
                      activeClassName={'active'}
                    />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <DetailModal ref="detail_modal" />
      </div>
    )
  }
}

export default LandingPageFee