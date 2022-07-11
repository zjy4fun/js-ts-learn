const age = 12
const name = "Amy"
const person = {age, name}
//等价于下面这种写法
const person1 = {age: age, name: name}
console.log(person)
console.log(person1)

const person2 = {
    sayHi() {
        console.log('Hi')
    },
    //方法名也可以简写
    sayHi2:function() {
        console.log('Hi2')
    }
}
//如果是Generator函数，需要在前面加上一个星号
const obj = {
    * myGenerator() {
        yield "Hello, World"
    }
}
//等同于
const obj2 = {
    myGenerator: function*() {
        yield "Hello, World"
    }
}

//属性名表达式
const obj3 = {
    ["he"+"llo"]() {
        return "hi"
    }
}
console.log(obj3.hello())



