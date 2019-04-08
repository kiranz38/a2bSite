import React from 'react';
import axios from 'axios';

//Author: Ram Date :7/10/2018
//Reducer for filtering user search and sorting mechanism
export function filterNews(){
 
  const ax = axios.create({
    baseURL: 'http://localhost:3000/'
  });
  const newsPayload = ax.get('news');
 
  return ({
    type:'REDUCER_NEWS',
    payload: newsPayload
  });
}
