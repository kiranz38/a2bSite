import React,{Component} from 'react';

//Author Ram Date: 7/10/2018
//Search bar for searching through user input
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }
  render(){
    return (
      <div className="search-sub-div">
      
      <div className="search-super-sub">
      <span className="glyphicon glyphicon-search"></span>
       <input className="search" value = {this.state.term} onChange={event => this.onInputChange(event.target.value)} placeholder="Search"/>
       </div>
      </div>
     
    );
  }
  onInputChange(term){
    
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
