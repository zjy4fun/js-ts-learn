async function helloAsync(){
    return "hello Async!"
}

console.log(helloAsync())//Promise { 'hello Async!' }

helloAsync().then(v => {
    console.log(v)//Promise { 'hello Async!' }
})