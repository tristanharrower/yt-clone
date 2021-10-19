import React from "react";
import reactDom from "react-dom";
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from 'react-redux'
import "./_base.scss"
import store from "./redux/store";

reactDom.render(

<Provider store={store}>
<App/>
</Provider>


,document.getElementById('root'));