/**
 * React 是React 的核心库
 * react-dom.js 是 提供 与 DOM相关的功能
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 可以删掉
// import './index.css'; // 拿到项目删掉

// 引入 App.js这个组件
import App from './App';

// 不用管 加快react运行速度的一个js文件
import * as serviceWorker from './serviceWorker';


// 把 APP组件 渲染到 页面上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
