// var avatar = require('./WechatIMG2.jpeg');   //CommonJS 语法

import avatar from './avatar.jpeg';
var img = new Image();
img.src = avatar;

var root = document.getElementById('root');
root.append(img)
