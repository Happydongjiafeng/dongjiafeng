let fatherName = 'father'
let age = 30
let money = 10000

function sayHello() {
    console.log(`Hello, my name is ${fatherName}, I am ${age} years old, and I have ${money} dollars.`)
}

exports.sayHello = sayHello

//exports相当于module.exports 的缩写，其实相当于（let exports = module.exports） 不能给exports重新赋值，会报错的