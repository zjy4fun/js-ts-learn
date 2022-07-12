//暂时性死区
var PI = "a"
if(true) {
    console.log(PI)       //ReferenceError: Cannot access 'PI' before initialization
    const PI = "3.1415926"
}