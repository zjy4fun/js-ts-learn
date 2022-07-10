let exam = {
    name: "Tom",
    age: 24
}

let proxy = new Proxy(exam, {
    get(target, propKey, receiver) {
        // 实现私有属性读取保护
        if(propKey[0] === '_'){
            throw new Error(`Invalid attempt to get private "${propKey}"`)
        }
        console.log('Getting ' + propKey)
        return target[propKey]
    }
})
//get()方法可以继承
let obj = Object.create(proxy)
console.log(obj.name)