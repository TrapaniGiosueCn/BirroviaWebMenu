import React             from 'react';
import ReactDOM          from 'react-dom';
import './index.css';
import App               from './App';
import reportWebVitals   from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './Fonts/Mouse_Deco.ttf'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZhRZnshsJYVkiaR023ZzfkBSpGLMVuSY",
  authDomain: "birrovia-menu.firebaseapp.com",
  projectId: "birrovia-menu",
  storageBucket: "birrovia-menu.appspot.com",
  messagingSenderId: "107188671999",
  appId: "1:107188671999:web:7fb3673c023f7d1f54c3ca",
  measurementId: "G-S6CCZ97225"
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
