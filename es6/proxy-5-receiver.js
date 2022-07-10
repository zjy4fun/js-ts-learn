const handler = {
    set: function(obj, prop, value, receiver) {
        obj[prop] = receiver
    }
}
const proxy = new Proxy({}, handler)
proxy.name = 'Tom'
//obj:proxy, prop:name, value:'Tom, receiver:proxy
console.log(proxy.name === proxy)

const exam = {}
Object.setPrototypeOf(exam, proxy)
exam.name = "Tom"
console.log(exam.name === exam)