// 手写深拷贝
// 参考:https://juejin.cn/post/6844903929705136141#heading-0

//1. 只考虑对象类型
function clone1(target) {
    if(typeof target === 'object') {
        let cloneTarget = {}
        for(const key in target) {
            //使用递归的方法解决
            cloneTarget[key] = clone1(target[key])
        }
        return cloneTarget
    }else{
        return target
    }
}

const target1 = {
    field1: 1,
    field2: undefined,
    field3: 'Jack',
    field4:{
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}

const target_1_ret = clone1(target1)
console.log(target_1_ret)

//2. 考虑数组
function clone2(target) {
    if(typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for(const key in target) {
            //使用递归的方法解决
            cloneTarget[key] = clone2(target[key])
        }
        return cloneTarget
    }else{
        return target
    }
}

const target2 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

const target_2_ret = clone2(target2)
console.log(target_2_ret)

const target3 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target3.target3 = target3;

// const target_3_ret = clone2(target3)//RangeError: Maximum call stack size exceeded

// 3. 使用 map 解决循环引用的问题
function clone3(target, map = new Map()) {
    if(typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        if(map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for(const key in target) {
            cloneTarget[key] = clone3(target[key], map)
        }
        return cloneTarget
    }else{
        return target
    }
}
const target_3_ret = clone3(target3, new Map())

console.log(target_3_ret)