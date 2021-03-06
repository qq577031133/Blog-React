import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/index.css';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from "react-router-dom";
import routeConfig from '@/router'
import * as serviceWorker from '@/utils/serviceWorker';
import Layout from '@/components/layout'
require('@/assets/fonts/iconfont.css');
const App = () => (
  <Layout content={ <BrowserRouter>
    {renderRoutes(routeConfig)}
  </BrowserRouter>}/>
   
)
ReactDOM.render(
  <App/>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
