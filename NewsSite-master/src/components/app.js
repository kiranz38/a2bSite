import React, { Component } from 'react';

import Article_List from '../container/article-list';

//Author : Ram Date : 7/10/2018
//Root component HOC
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div>
      <Article_List />
      </div>
    );
  }

}
