import React, {Component} from "react"
import api from '../../src/services/api'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth:800,
      height:800
    }
  };

class EditModal extends Component {
    constructor(props){
        super(props)    
        this.state={
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
     
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = 'green';
    }
    
    closeModal() {
         this.setState({modalIsOpen: false});
    }
    render(){
        return(
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
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
                        <hr/>
                        <div className="px-3">
                          <ul className="list-unstyled">
                            <li className="mb-2">Payment Amount <span className="float-right text-3">$562.00</span></li>
                            <li className="mb-2">Fee <span className="float-right text-3">-$4.80</span></li>
                          </ul>
                          <hr className="mb-2"/>
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
           </Modal>
        )
      
    }
}
export default EditModal

