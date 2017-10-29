import React from 'react';
import ReactDom,{render} from 'react-dom';
import Routes from './routes'

// import './main.css'

window.onresize = function () {
    document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
};
document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
render(Routes,document.getElementById('app'));