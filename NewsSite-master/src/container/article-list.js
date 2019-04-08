import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectArticle} from '../actions/action_articleselect';

import {filterNews} from '../actions/action_newsfilter';

import { bindActionCreators } from 'redux';

import FullArticle from './edit_article';

import ArticleHeader from '../components/article_header';
import {browserHistory} from "react-router";
import 'airbnb-browser-shims';
import NewsCategory from '../components/news_category';
import ArticleItem from '../components/article_item';
import SearchBar from '../components/search-bar';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import _ from 'lodash';
import { stringify } from 'querystring';
import NewArticle from '../components/news_details';
import perfectScroll from 'perfect-scrollbar';

const ps =new perfectScroll('.container', {
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 50,
  scrollXMarginOffset:5,
  scrollYMarginOffset:5
});
//Author :Ram
//Main component which encloses all the components
class Article_List extends Component{

  
    state = {news :[]};
    
 
   componentDidMount(){
     
    //var dom = document.querySelector(".inline-scroll");
    // perfectScroll = new perfectScroll(".inline-scroll", {
    //   wheelSpeed: 1,
    //   wheelPropagation: true,
    //   minScrollbarLength: 50,
    //   scrollXMarginOffset:5,
    //   scrollYMarginOffset:5
    // });
    
  //   this.setState({ps : new perfectScroll('.container', {
  //     wheelSpeed: 2,
  //     wheelPropagation: true,
  //     minScrollbarLength: 20
  //   })
  //  });
  }
   //for toggling the Model popup window on click of employee card
  togglePopUp(article) {
    this.props.selectArticle(article);
    this.setState({open : true});
    
      browserHistory.push('/home/edit');
    
  }
  componentWillMount(){
    
    this.props.filterNews();
    this.setState({news: this.props.newsFilter});
    this.filterArticle.bind(this);
    
  }

filterArticle(term=null){
    if(term != null){
      // this.props.filterNews();
      
      if(this.props.newsFilter.length > 0){
        var filteredArticle = this.props.newsFilter.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
        this.setState({news : filteredArticle});
      }
    }
    else{
     
      this.setState({news:this.props.newsFilter});
    }
}
 filterArticleSearch(term)
  {
    this.props.filterNews();
    this.setState({news: this.props.newsFilter});
    if(term != null && term != "")
    {
          
     var articles = _.filter(this.state.news, function (article) {
        article.Stories = article.Stories.filter((item)=> item.TextContent.toLowerCase().includes(term.toLowerCase()));
        return article.Stories;
        });
     if(articles.length > 0){
      this.setState({news : articles});
     }
     else{
      this.setState({news: this.props.newsFilter});
     } 
    }
    else{
      this.setState({news: this.props.newsFilter});
    }
    
  }
  

  //for filtering based on search
  fetchSearchList(term){
    
    this.filterArticleSearch(term);
  }

  closePopUp(){
    this.setState({open : false});

      browserHistory.push('/home');
    
  }
  renderNews(){
    var newsList = this.props.newsFilter;
    
   
    if(newsList.length > 0){
      return (
        
        <NewsCategory news = {newsList}   onCategoryClick ={term=>this.filterArticle(term)}/>
        );
    }
    else{
      return ("Loading..Please wait...");
    }
    
  }
  renderArticles(){
    
    var data = this.props.newsFilter;
    if(this.state.news.length > 0){
      data = this.state.news;
    }
    
    if(data.length > 0){
        return data.map((articleitem)=>{
          
          return articleitem.Stories.map((article,i)=>{
            return(<div key={i} className="inline-cls" >
            <ArticleItem key={i} item={article} onScroll={()=> ps.update()}  onClick={()=>this.togglePopUp(article)}/>
            </div>);
          });
          
        });
    }
    else{
      return("Loading...Please wait..");
    }
    
  }
 
  render(){
   
    return(
      <div style={{textAlign:"center"}}>
      
      <ArticleHeader />
      
       <div className="page-container">
          {this.renderNews()} 
          
          <div className="container">
          <SearchBar onSearchTermChange={term => this.fetchSearchList(term) } />
          
          <div className = "inline-scroll">
          {this.renderArticles()} 
          </div>
          
          </div>
          
       </div>
       <FullArticle resultjson={this.props.newsFilter} open={this.state} onClosePopUp={()=>this.closePopUp()} />
       {/* <NewArticle resultjson={this.props.newsFilter} open={this.state} onClosePopUp={()=>this.closePopUp()}  /> */}
       </div>
    );
  }
}

//mapping state to props so that it can be later passed on a params to the container
function mapStateToProps(state){
  return ({
    
    newsFilter : state.filterNews
  });
}
//anything returned from here will be as props on the  container
function mapDispatchToProps(dispatch) {
  //whenever this get called, result will be passed to all the reducers
  return bindActionCreators(Object.assign({},{selectArticle:selectArticle},{filterNews:filterNews}) ,dispatch);
}


//making dispatch method as a prop
export default connect(mapStateToProps,mapDispatchToProps)(Article_List);
