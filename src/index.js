import React from "react";
import reactDom from "react-dom";
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from 'react-redux'
import "./_base.scss"
import store from "./redux/store";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {BrowserRouter as Router} from 'react-router-dom'

reactDom.render(

<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>


,document.getElementById('root'));