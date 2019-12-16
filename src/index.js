
// import './style.css';
// import './style1.css';
// import './style.scss';

// console.log('aaaa ')

// var btn = document.createElement('button');
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// import "@babel/polyfill";

// const arr = [
//   new Promise(() => { }),
//   new Promise(() => { })
// ]

// arr.map(item => {
//   console.log(item)
// })

// import { add } from './math.js'

// add(1, 2)

// 同步加载模块
// import _ from 'lodash'

// import jquery from 'jquery'

// console.log(_.join(['a', 'b', 'c'], '@@@@'))

// var element = document.createElement('div');
// element.innerHTML = _.join(['ll', 'yyy'], '####')
// document.body.appendChild(ele) 

// 异步加载模块，可以实现懒加载
// async function getComponent() {
// return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
//   var element = document.createElement('div');
//   element.innerHTML = _.join(['ll', 'yyy'], '---')
//   return element;
// })

//   const { default: _ } = await import(/*webpackChunkName:"lodash"*/'lodash');
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['ll', 'yyy'], '---')
//   return element;

// }

// document.addEventListener('click', () => {
//   getComponent().then(ele => {
//     document.body.appendChild(ele)
//   })
// })

// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true */'./click.js').then(({ default: func }) => {
//     func();
//   })
// })


// import test from './test'
// console.log(test.name)

// import _ from 'lodash'
// import $ from 'jquery'

// const dom = $('<div>')
// dom.html(_.join(['lyj', 'hello'], '~~'))
// $('body').append(dom)

// console.log(this)

import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return <div>hello world</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))
