//返回一个对象,需要使用小括号对对象进行包裹
var f = (id, name) => ({id: id, name: name})

var func = () => {
    console.log(this)
    console.log(arguments)
}

func(55)

function fn1() {
    setTimeout(() =>{
        console.log(this.a)
    }, 0)
}
var a = 20
//fn 的 this 对象为 {a:18}
fn1.call({a: 18})//18

var Person = {
    'age': 19,
    'sayHello': function(){
        setTimeout(function() {
            console.log(this)//在浏览器中会绑定到window对象上,打印的值为外层的age=20
            console.log(this.age)
        })
    }
}

var age = 20
Person.sayHello()

var Person1 = {
    'age': 18,
    'sayHello': function() {
        setTimeout(() => {
            //这里的this指的就是Person1内的this, 访问到的变量age=18
            console.log(this.age)
        })
    }
}

Person1.sayHello()//18



