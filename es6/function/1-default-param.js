function fn(name, age=17) {
    console.log(name, age)
}
fn("Amy", 18)//Amy 18
fn("Amy", "")//Amy
fn("Amy")//Amy 17
fn("Amy", null)//Amy null

function f(x, y=x) {
    console.log(x, y)
}

f(1)//1 1
function f1(x=y){
    console.log(x)
}
f()//undefined undefined

