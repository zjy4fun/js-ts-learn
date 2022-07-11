let person = {
    name: "Amy",
    age: 15
}
let someone = {
    ...person
}
console.log(someone)

//可以用于合并两个对象
let age = {age:15}
let name = {name: "Amy"}
let person2 = {...age, ...name}
console.log(person2)

//自定义的属性和扩展运算符对象里面属性相同的时候，扩展运算符对象内部同名的属性将被覆盖掉
let person3 = {name: "Amy", age: 15}
let someone3 = {...person3, name: "Mike", age: 17}
console.log(someone3)//{ name: 'Mike', age: 17 }
