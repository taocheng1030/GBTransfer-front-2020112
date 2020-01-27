import React, {Component} from "react"
import api from '../../src/services/api'
import Modal from 'react-modal';
import {Button} from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Utils from "../services/utils"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:800
    }
  };

class EditModal extends Component {
    constructor(props){
        super(props)    
        this.state={
            modalIsOpen: false,
            currentUser:{
                user:{}
            },
            loading:false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount(){
       
    }
    
    componentWillReceiveProps(nextProps){
        
    }
    openModal() {
        this.setState({currentUser:this.props.currentUser},()=>{
            console.log('current user on didmount=',this.state.currentUser)
        })
        this.setState({modalIsOpen: true});
    }
     
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = 'green';
    }
    
    closeModal() {
         this.setState({modalIsOpen: false});
         
    }
    updateProfile() {
        let {currentUser}=this.state
        this.setState({ loading: true })
        
        api.updateProfile({
            data: {
                id: currentUser.user.id,
                email: currentUser.user.email,
                name: currentUser.user.name,
                image: currentUser.user.image,
                country:currentUser.user.country,
                city:currentUser.user.city,
                phone:currentUser.user.phone,
                address:currentUser.user.address
            }
        }, (err, res) => {
            console.log('error, res on updateProfile==',err,res)
            this.setState({ loading: false })
            this.closeModal()
            this.props.refreshProfile()
        })
    }
    onChange(type,e){
        console.log('type,e on onchange---',type,e.target.value)
        let {currentUser} = this.state
        currentUser.user[type]=e.target.value
        this.setState({currentUser})
    }
    selectCountry(val){
        console.log('val on select country----',val)
        let {currentUser} = this.state
        currentUser.user['country']=val
        this.setState({currentUser})
    }
    render(){
        let {currentUser,loading}=this.state
        return(
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title font-weight-400">Personal Details</h5>
                      <button onClick={()=>{this.closeModal()}} type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    </div>
                    <div className="modal-body p-4">
                      <form id="personaldetails" method="post">
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="firstName">User Name</label>
                              <input type="text" value={currentUser.user.name} className="form-control" data-bv-field="firstName" id="firstName" required placeholder="" onChange={this.onChange.bind(this,'name')}/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="firstName">E-mail</label>
                              <input type="text" value={currentUser.user.email} className="form-control" data-bv-field="firstName" id="firstName" required placeholder="" onChange={this.onChange.bind(this,'email')}/>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="address">Address</label>
                              <input type="text" value={currentUser.user.address} className="form-control" data-bv-field="address" id="address" required placeholder="Address 1" onChange={this.onChange.bind(this,'address')}/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="city">City</label>
                              <input id="city" value={currentUser.user.city} type="text" className="form-control" required placeholder="" onChange={this.onChange.bind(this,'city')}/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="phone">Phone</label>
                              <input id="phone" value={currentUser.user.phone} type="text" className="form-control" required placeholder="" onChange={this.onChange.bind(this,'phone')}/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="inputCountry">Country</label>
                              <CountryDropdown
                                    className="country-selector"
                                    value = {currentUser.user.country}
                                    onChange={(val) => this.selectCountry(val)} 
                                    defaultOptionLabel={''}
                              />
                            </div>
                          </div>
                        </div>
                        <Button className="btn btn-primary btn-block mt-2" onClick={()=>{this.updateProfile()}}>
                                {!loading && <div>Save Changes</div>}
                                {loading && <Loader type="Oval" color="white" height={20} width={20} />}
                        </Button>
                      </form>
                    </div>
                  </div>
                {/* </div> */}
            </Modal>
        )
      
    }
}
export default EditModal

