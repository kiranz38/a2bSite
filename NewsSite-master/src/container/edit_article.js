import React , {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import Moment from 'react-moment';
import 'airbnb-browser-shims';
import SubmitForm from '../components/submitform';

//Author :Ram
//Component to show article details
class FullArticle extends Component {
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
    if(!this.props.activeArticle){
      return (<div></div>);
    }
    return(
      <div >
      <Modal  open={open} onClose={this.onCloseModel} >
      
        
         <div className="ArtcileModal">
         <div className="articletitle">Edit "{this.props.activeArticle.Title}"</div>
         <SubmitForm news={this.props.resultjson} onClose={this.props.onClosePopUp} activeArticle = {this.props.activeArticle}></SubmitForm>
         </div>
      
      </Modal>
      </div>
    );
  }

  onOpenModal = () =>{
    this.setState ({open : true});
  }

}

function mapStateToProps(state){
  return{
    activeArticle : state.activeArticle
  };
}

export default connect(mapStateToProps)(FullArticle);
