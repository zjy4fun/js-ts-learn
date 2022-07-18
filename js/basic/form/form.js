'use strict'
var checkRegisterForm = function() {
    //TODO:
    //1. 拿到用户名和密码对应的dom节点
    var username = document.getElementById('username')
    var password_1 = document.getElementById('password')
    var password_2 = document.getElementById('password-2')
    var username_re = /[0-9a-z]{3-10}/
    var password_re = /[0-9a-z]{6-20}/
    if(username_re.test(username.innerText) && password_re.test(password_1.innerText) && password_1.innerText === password_2.innerText) {
        return true
    }
    return false
}

// 测试:
;(function () {
    window.testFormHandler = checkRegisterForm;
    var form = document.getElementById('test-register');
    if (form.dispatchEvent) {
        var event = new Event('submit', {
    		bubbles: true,
    		cancelable: true
  		});
        form.dispatchEvent(event);
    } else {
        form.fireEvent('onsubmit');
    }
})();