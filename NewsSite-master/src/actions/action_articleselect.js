import React from 'react';
//Author Ram Date : 7/10/2018
export function selectArticle(article){
  //select book is an action creator which return an object with type property
  return {
    type:'ARTICLE_SELECTED',
    payload: article
  }
}
