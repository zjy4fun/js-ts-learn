//用于拦截 Object.getOwnPropertyD()返回值为属性描述对象或者undefined
let handler = {
    getOwnPropertyDescriptor: function (target, propKey) {
        return Object.getOwnPropertyDescriptor(target, propKey)
    }
}

let target = {name: "Tom"}
let proxy = new Proxy(target, handler)
console.log(Object.getOwnPropertyDescriptor(proxy, 'name'))