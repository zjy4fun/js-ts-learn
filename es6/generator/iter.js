function* objectEntries(obj) {
    //Reflect.ownKeys返回对象所有属性,不管属性是否可枚举,包括Symbol
    const propKeys = Reflect.ownKeys(obj)
    for(const propKey of propKeys){
        yield [propKey, obj[propKey]]
    }
}

const jane = {first: 'Jane', last: 'Doe'}
for(const [key,value] of objectEntries(jane)){
    console.log(`${key}:${value}`)
}