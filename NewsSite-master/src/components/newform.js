import React,{Component} from 'react';
import Moment from 'moment';
import _ from 'lodash';
import FileBase64 from 'react-file-base64';
import axios from 'axios';


class NewSubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {titlevalue: "",
        subtitle:"",
        author:"",
        date:"",
        TextContent:"",
        ThumbNail : "",
        
    };
    
      this.handleChangeofTitle = this.handleChangeofTitle.bind(this);
      this.handleChangeofSubTitle = this.handleChangeofSubTitle.bind(this);
      this.handleChangeofAuthor = this.handleChangeofAuthor.bind(this);
      this.handleChangeofDate = this.handleChangeofDate.bind(this);
      this.handleChangeofTitle = this.handleChangeofTitle.bind(this);
      this.handleChangeofTextContent = this.handleChangeofTextContent.bind(this);
      this.handleChangeofThumbNail = this.handleChangeofThumbNail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeofThumbNail(event) {
        this.setState({ThumbNail: event.target.value});
      }
    handleChangeofTitle(event) {
      this.setState({titlevalue: event.target.value});
    }
    handleChangeofSubTitle(event) {
        this.setState({subtitle: event.target.value});
      }
    handleChangeofAuthor(event) {
        this.setState({author: event.target.value});
      }
    handleChangeofDate(event) {
        this.setState({date: event.target.value});
      }
    handleChangeofTextContent(event) {
        this.setState({TextContent: event.target.value});
      }
    
    handleSubmit(event) {
      event.preventDefault();
      
     
        const ax = axios.create({
          baseURL: 'http://localhost:3000/'
        });
        const newsAdded = ax.post('news/'+ ID + "/Stories", patchData).then(data => console.log(data));      
        
    }
    getFiles(files){
      
        this.setState({ ThumbNail: files.base64 })
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          Title : <div><input className="inputext" id="title" value = {this.state.titlevalue} onChange={this.handleChangeofTitle} /></div>
          Sub Title: <div><input className="inputext" id="subtitle"  value = {this.state.subtitle} onChange={this.handleChangeofSubTitle} /> </div>
          Author: <div><input className="inputext" id="author"  value = {this.state.author} onChange={this.handleChangeofAuthor} /> </div>
          Published Date :  <div><input className="inputext" id="date" type="date" value = {this.state.date} onChange={this.handleChangeofDate}/></div>
          Text Content : <div><textarea className="inputext" id="date" value = { this.state.TextContent} onChange={this.handleChangeofTextContent} /> </div>
          ThumbNail : <div className="rowwise">
          <FileBase64 className="inputext" multiple={ false } onDone={ this.getFiles.bind(this) } />
          {/* <input className="inputext" id="image" accept="image/gif, image/jpeg, image/png" type="file"  onChange={this.handleChangeofThumbNail} /> */}
          <img src={this.state.ThumbNail} className="thumbnailimg" /></div>
          <input type="submit" value="Submit" onClick={()=>this.handleSubmit} />
        </form>
      );
    }
  }

  export default NewSubmitForm;