let exam = {}

let proxy = new Proxy({}, {
    getPrototypeOf(target) {
        //返回值必须是对象或者null，否则报错
        return exam
    }
})

console.log(Object.getPrototypeOf(proxy))