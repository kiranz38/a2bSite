import React , {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import Moment from 'react-moment';
import 'airbnb-browser-shims';
import NewSubmitForm from '../components/newform';

//Author :Ram
//Component to show article details
class NewArticle extends Component {
  constructor(props){
    super(props);
    this.state = {open:true};
    const {open} = this.props.open;
  }

  onOpenModel = () => {this.setState({open:true})};
  onCloseModel = () => {
    this.props.onClosePopUp();
  };

  render(){
    const {open} = this.props.open;
   
    return(
      <div >
      <Modal  open={open} onClose={this.onCloseModel} >
      
         <div className="ArtcileModal">
         <div className="articletitle">Create Article</div>
         <NewSubmitForm news={this.props.resultjson} />
         </div>
      
      </Modal>
      </div>
    );
  }

  onOpenModal = () =>{
    this.setState ({open : true});
  }

}



export default NewArticle;
