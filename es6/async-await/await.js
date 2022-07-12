function testAwait(x){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        }, 200)
    })
}

async function helloAsync() {
    var x = await testAwait("hello world!")
    console.log(x)
}

helloAsync()

function testAwait2(){
    console.log("testAwait2")
}

async function helloAsync2(){
    await testAwait2()
    console.log("helloAsync2")
}
helloAsync2()