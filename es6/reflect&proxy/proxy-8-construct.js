let handler = {
    //用于拦截new命令，返回值必须是对象
    construct: function(target, args, newTarget) {
        console.log('handle construct')
        return Reflect.construct(target, args, newTarget)
    }
}

class Exam {
    constructor(name) {
        this.name = name
    }
}

let ExamProxy = new Proxy(Exam, handler)
let proxyObj = new ExamProxy('Tom')
console.log(proxyObj)