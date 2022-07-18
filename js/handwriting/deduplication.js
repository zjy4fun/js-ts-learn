const deduplication_1 = (array) => {
    return [...new Set(array)]
}

const deduplication_2 = (array) => {
    let result = []

    array.forEach((it) => {
        if(result.indexOf(it) === -1) {
            result.push(it)
        }
    })

    return result
}

const deduplication_3 = (array) => {
    return array.filter((it, i) => array.indexOf(it) === i)
}

const deduplication_4 = (array) => {
    return Array.from(new Set(array))
}

let testArray = [1,2,3,1,2,3,4]

console.log(deduplication_1(testArray))
console.log(deduplication_2(testArray))
console.log(deduplication_3(testArray))
console.log(deduplication_4(testArray))
