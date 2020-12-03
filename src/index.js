import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData =[
  {id:0, message: 'ну че кого???', likeCount: 12},
  {id:0, message: 'та пока не понятно', likeCount: 34},
  {id:0, message: 'учим react', likeCount: 1},
  {id:0, message: 'тра-та-та', likeCount: 74},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
