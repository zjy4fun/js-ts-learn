function printName(obj: {first:string; last?: string}){
    console.log(obj)
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase())
    }
    console.log(obj.last?.toUpperCase())
}

printName({first: "jack"})
printName({first: "jack", last: "ma"})