import React from 'react';
import {Router,IndexRoute} from 'react-router';

import App from './components/app';
import FullArticle from './container/edit_article';

export default (<Router   path="/" component ={App} >
                <Router  path="/home" component={App}  />
                <Router  path="/home/edit" component={FullArticle}  />
                </Router>);
