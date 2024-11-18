let {sayHello} = require('./father.js') //引入父亲模块 (模块引入就像一条线穿了进去)
console.log('this under is myFather');

sayHello()
