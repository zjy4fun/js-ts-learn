function Person() {
}

Person.prototype.name = "Jack"
Person.prototype.age = 29
Person.prototype.job = "driver"
Person.prototype.sayName = function () {
    console.log(this.name)
}

let person1 = new Person()
let person2 = new Person()

console.log(person1.hasOwnProperty("name"))//false
console.log("name" in person1)//true

person1.name = "Greg"
console.log(person1.name)//Greg, 来自实例
console.log(person1.hasOwnProperty("name"))//true
console.log("name" in person1)//true

console.log(person2.name)//Jack, 来自原型
console.log(person2.hasOwnProperty("name"))//false
console.log("name" in person2)//true

delete person1.name
console.log(person1.name)//Jack, 来自原型
console.log(person1.hasOwnProperty("name"))//false
console.log("name" in person1)//true
//in 在单独使用时, 会在可以通过对象访问指定属性时返回true, 无论该属性是在实例上还是在原型上

/**
 * 确定某个属性是否存在于原型上
 */
function hasPrototypeProperty(object, name) {
    //不在对象实例上,并且还能找到name属性 ==> 说明name属性在原型上
    return !object.hasOwnProperty(name) && (name in object)
}

/**
 * 使用 Object.keys() 获取对象上所有可枚举的实例属性
 */
console.log("使用 Object.keys() 获取对象上所有可枚举的实例属性")
let keys = Object.keys(Person.prototype)
console.log(keys)// [ 'name', 'age', 'job', 'sayName' ]

let p1 = new Person()
p1.name = "Rob"
p1.age = 31
let p1keys = Object.keys(p1)
console.log(p1keys)// [ 'name', 'age' ]