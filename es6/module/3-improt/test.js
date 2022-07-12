import {a} from "./xxx.js"

// a = {}//TypeError: Assignment to constant variable.

a.foo = "hello"

console.log(a)//{ name: 'zhangsan', foo: 'hello' }

