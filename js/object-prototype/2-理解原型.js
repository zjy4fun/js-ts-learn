/*
* 构造函数可以是函数表达式, 也可以是函数声明
* */
function Person() {}
//声明之后, 构造函数就有了一个与之关联的原型对象
console.log(typeof Person.prototype)    //object
console.log(Person.prototype)           //{}

//原型对象的constructor属性引用这个构造函数, 构造函数的prototype引用其原型对象, ==> 循环引用
console.log(Person.prototype.constructor === Person)//true

//正常的原型链都会终止于Object的原型对象
//Object 原型的原型是 null
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Person.prototype.__proto__.constructor === Object)
console.log(Person.prototype.__proto__.__proto__ === null)
console.log(Person.prototype.__proto__)
/*
[Object: null prototype] {}
 */

let person1 = new Person(),
    person2 = new Person()
//构造函数, 原型对象和实例是三个完全不同的对象
console.log(person1 !== Person)
console.log(person1 !== Person.prototype)
console.log(Person.prototype !== Person)

/**
 * 实例通过 __proto__ 链接到原型对象, 实际上指向隐藏特性[[Prototype]]
 * 构造函数通过 prototype 属性链接到原型对象
 * 实例与构造函数没有直接联系, 与原型对象有直接联系
 */
console.log(person1.__proto__ === Person.prototype)
console.log(person1.__proto__.constructor === Person)

/**
 * 同一个构造函数创建的两个实例共享同一个原型对象
 */
console.log(person1.__proto__ === person2.__proto__)

/**
 * instanceof 检查实例的原型链中
 * 是否包含指定构造函数的原型
 */
console.log(person1 instanceof Person)
console.log(person1 instanceof Object)
console.log(Person.prototype instanceof Object)




