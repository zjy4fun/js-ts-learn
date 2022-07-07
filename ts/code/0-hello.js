/*
添加类型注解（type annotations）
并不需要总是写类型注解，大部分时候，typescript可以自动推断出类型
如果类型系统可以正确地推断出类型，最好就不要手动添加类型注解
*/
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greet("Jack", new Date());
