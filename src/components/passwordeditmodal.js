import React, {Component} from "react"
import api from '../../src/services/api'
import Modal from 'react-modal';
import {Button} from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
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
toast.configure();
class PasswordEditModal extends Component {
    constructor(props){
        super(props)    
        this.state={
            modalIsOpen: false,
            currentUser:{
                user:{}
            },
            loading:false,
            confirmPassword:"",
            newPassword:"",

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
        this.state[type]=e.target.value
        console.log("this.state=====",this.state)
        this.setState({
          oldPassword:this.state.oldPassword,
          newPassword:this.state.newPassword,
          confirmPassword:this.state.confirmPassword
        })
        
    }
    selectCountry(val){
        console.log('val on select country----',val)
        let {currentUser} = this.state
        currentUser.user['country']=val
        this.setState({currentUser})
    }
    resetPassword(){
      let {currentUser,confirmPassword,newPassword,oldPassword,loading} = this.state
      
      if(newPassword!=confirmPassword || newPassword==""){
          toast("Please confirm new password again! It doesn't match!", { type: toast.TYPE.ERROR });
          return
      }
      this.setState({loading:true})
      console.log("this.state.oldPassword, this.state.password before loading;;;;",oldPassword, newPassword,currentUser)
      api.resetPassword({
          id: currentUser.user.id,
          oldPassword,
          newPassword
      }, (err, res) => {
          this.setState({loading:false})
          console.log("error,res on reset password",err,res)
          if (err == null) {
              toast('Changed password successfully!', { type: toast.TYPE.SUCCESS });
              
          } else {
              toast('Password change failed!', { type: toast.TYPE.ERROR });
          }
      })
    }
    render(){
        let {currentUser,loading,newPassword,confirmPassword,currentPassword}=this.state
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
                      <h5 className="modal-title font-weight-400">Password Change</h5>
                      <button onClick={()=>{this.closeModal()}} type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    </div>
                    <div className="modal-body p-4">
                      <form id="personaldetails" method="post">
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="firstName">Current Password</label>
                              <input type="password" value={currentPassword} className="form-control" data-bv-field="firstName" id="firstName" required placeholder="" onChange={this.onChange.bind(this,'oldPassword')}/>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="firstName">New Password</label>
                              <input type="password" value={newPassword} className="form-control" data-bv-field="firstName" id="firstName" required placeholder="" onChange={this.onChange.bind(this,'newPassword')}/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group">
                              <label for="city">Confirm New password</label>
                              <input id="city" value={confirmPassword} type="password" className="form-control" required placeholder="" onChange={this.onChange.bind(this,'confirmPassword')}/>
                            </div>
                          </div>
                        </div>
                        <Button className="btn btn-primary btn-block mt-2" onClick={()=>{this.resetPassword()}}>
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
export default PasswordEditModal

