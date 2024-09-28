import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let crew = {
  actors:[],
  actresses:[],
  directors:[],
}

let reducer = (latestCrew = crew,dispatchedObj)=>{
console.log("Inside reducer Function");
console.log(dispacthedObj);

if(dispacthedObj.type === "addActors"){
return {...latestCrew,actors:latestCrew.actors.concat([dispatchedObj.data])};
}else if(dispacthedObj.type == "addActresses"){
  return {...latestCrew,actresses:latestCrew.actresses.concat([dispatchedObj.data])};
}else if(dispacthedObj.type == "addDirectors"){
  return {...latestCrew,directors:latestCrew.directors.concat([dispatchedObj.data])};
}
  
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
