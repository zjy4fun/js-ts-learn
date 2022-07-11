const queueObservers = new Set()
const observe = fn => queueObservers.add(fn)
const observable = obj => new Proxy(obj, {set})
function set(target, key, value, receiver) {
    //获取对象的赋值操作
    const result = Reflect.set(target, key, value, receiver)
    //执行所有观察者
    queueObservers.forEach(observer => observer())
    return result
}