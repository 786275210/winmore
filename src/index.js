import React from 'react';
import axios from 'axios';
import $ from 'jquery';
//虚拟DOM
import ReactDOM from 'react-dom';
//样式
import './index.css';
import 'antd/dist/antd.css';
//返回顶部js
import win from './lib/win.js';

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import { withCookies, Cookies } from 'react-cookie';
//引入哈希路由#
import { HashRouter as Router, Route , Redirect} from "react-router-dom";

// 页面组件 容器组件
import Home from './pages/Home/Home';
import Mine from './pages/Mine/Mine';
import Detail from './pages/Detail/Detail';
import Logining from './pages/Logining/Logining';
import Xbacktop from './componens/Xbacktop/Xbacktop';

import * as serviceWorker from './serviceWorker';
React.axios = axios;

// 创建仓库
const store = createStore(function(state={
    name:"laoyao",
    skill:"ps",
    text:"",
    isShowactive:false,
    isShowgetway:false
    
}, action){
    const count = state.count
    switch (action.type) {
      case 'increase':
        return {
          ...state,
          count: count + 2
        }
      case 'multi':
        return Object.assign({}, state, {name: action.name});
      case 'editText':
        return {
            ...state,
            text:action.text
        }
      case 'orange':
        return {
            ...state,
            isShowactive:action.isShowactive
        }
        case 'getway':
        return {
            ...state,
            isShowgetway:action.isShowgetway
        }
        case 'amountsw':
        return {
            ...state,
            text:action.text
        }
      default:
        return state
    }
});

console.log(store)




ReactDOM.render(
<Provider store={store}>
	<Router>
		<div>		
   			<Route path="/home/" component={Home} />
   			<Route path="/home/" component={Mine} />
   			<Route path="/detail" component={Detail} />
   			<Route path="/logining" component={Logining} />
			<Xbacktop />
		</div> 	
	</Router>
</Provider>,

	document .getElementById('root')
	
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
