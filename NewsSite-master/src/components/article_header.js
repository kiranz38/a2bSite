import React,{Component} from 'react';
import Moment from 'react-moment';

//Author Ram Date: 7/10/2018
//Company Header and Title
class ArticleHeader extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }
  render(){
    return (
      <div className="article-align"><div className="float-right">A2B News</div></div>
      
    );
  }
}

export default ArticleHeader;
