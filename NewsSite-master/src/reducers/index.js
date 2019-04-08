import { combineReducers } from 'redux';

import FilterNews from './reducer_news';
import ActiveArticle from './reducer_article_selected';

//Author Ram Date: 7/10/2018
//for mapping application states
const rootReducer = combineReducers({
 
  filterNews : FilterNews,
  activeArticle : ActiveArticle
});

export default rootReducer;
