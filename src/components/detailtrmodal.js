import React, { Component } from "react"
import api from '../../src/services/api'
import Modal from 'react-modal';
import moment from 'moment'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 800
  }
};

class EditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      transaction: {}
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(transaction) {
    console.log('transaction on openmodal===', transaction)
    this.setState({ modalIsOpen: true });
    this.setState({ transaction })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = 'green';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });

  }
  render() {
    let { transaction } = this.state
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="row no-gutters">
              <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                <div className="my-auto text-center">
                  <div className="text-17 text-white my-3"><i className="fas fa-building"></i></div>
                  <h3 className="text-4 text-white font-weight-400 my-3">Greenbay</h3>
                  <div className="text-8 font-weight-500 text-white my-4">${Number(transaction.receiveAmount).toFixed(2)}</div>
                  <p className="text-white">{moment(transaction.createdAt).format("D MMMM YYYY")}</p>
                </div>
              </div>
              <div className="col-sm-7">
                <h5 className="text-5 font-weight-400 m-3">Transaction Details
                          <button onClick={() => { this.closeModal() }} type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </h5>
                <hr />
                <div className="px-3">
                  <ul className="list-unstyled">
                    <li className="mb-2">Sent Amount <span className="float-right text-3">${Number(transaction.sendAmount).toFixed(2)}</span></li>
                    <li className="mb-2">Fee <span className="float-right text-3">- ${Number(transaction.fee).toFixed(2)}</span></li>
                  </ul>
                  <hr className="mb-2" />
                  <p className="d-flex align-items-center font-weight-500 mb-4">Recipient Amount <span className="text-3 ml-auto">${transaction.receiveAmount}</span></p>
                  <ul className="list-unstyled">
                    <li className="mb-2 font-weight-500">Paid By: <span className="float-right text-muted">{transaction.sender}</span></li>
                    {/* <li className="font-weight-500">Paid By:</li>
                    <li className="text-muted">{transaction.sender}</li> */}
                  </ul>
                  <ul className="list-unstyled">
                    <li className="mb-2 font-weight-500">Transaction ID: <span className="float-right text-muted">{transaction.transactionId}</span></li>
                    {/* <li className="font-weight-500">Transaction ID:</li>
                    <li className="text-muted">   {transaction.transactionId}</li> */}
                  </ul>
                  <ul className="list-unstyled">
                    <li className="font-weight-500">Description:</li>
                    {/* <li className="text-muted">{(transaction.description) ? transaction.description : "No description"}</li> */}
                    <textarea
                      className="text-muted w-100 fa-border"
                      rows="2"
                      id="description"
                      value={(transaction.description) ? transaction.description : "No description"}
                      disibled={true}>
                    </textarea>
                  </ul>
                  <ul className="list-unstyled">
                    <li className="font-weight-500">BlockchainID:</li>
                    {/* <li className="text-muted"><input style={{ width: 350 }} value={transaction.blockchaintxid} /></li> */}
                    <a href={`http://bluebarricade-blockchain-explorer.s3-website.us-east-2.amazonaws.com/#/transactions/${transaction.blockchaintxid}`} target="_blank">
                      <textarea
                        className="text-muted w-100 fa-border"
                        rows="2"
                        id="lockchaintxid"
                        value={transaction.blockchaintxid}
                        disibled={true}>
                      </textarea>
                    </a>
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
      </Modal>
    )

  }
}
export default EditModal

