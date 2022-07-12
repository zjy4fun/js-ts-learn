参考：https://www.runoob.com/w3cnote/es6-tutorial.html

# 1. 环境搭建

浏览器
Node.js

查看node已经实现的es6特性
```shell
node --v8-options | grep harmony
```

webpack 是一个现代 JavaScript 应用程序的静态模块打包器。
webpack 处理应用程序时，会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle
四个核心概念：
1. 入口（entry）
    指示 webpack 应用该是哪个模块，来作为构建其内部依赖图的开始。
2. 输出（output）
    告诉 webpack 在哪里输出它创建的 bundles，以及如何命名这些文件，默认值为 ./dist
3. loader
    让 webpack 处理非 JavaScript 文件，可以将 es6 的语法转为 es5
4. 插件（plugins）
    打包优化，压缩，定义环境变量等

gulp 是一个基于流的自动化构建工具，常用于轻量级的工程中

# 2.1 let 和 const

let 代码块内有效，只能声明一次，不存在变量提升
var 全局范围有效，可以声明多次，存在变量提升

const 声明一个只读变量，声明之后不允许改变（意味着一旦声明必须初始化）
暂时性死区：es6明确规定，代码块中如果存在let或者const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。
const保证变量指向的内存地址所保存的数据不允许改动。

# 2.2 解构赋值

针对数组或者对象进行模式匹配，然后对其中的变量进行赋值

# 2.3 Symbol

表示独一无二的值，最大的用法是用来定义对象的唯一属性值
原始数据类型包括：
Number , String ,Boolean ,Object ,null ,undefined ,Symbol
Symbol是原始数据类型，不是对象
可以接收一个字符串作为参数，为新创建的Symbol提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分

使用场景：
1. 作为属性名
由于每个Symbol的值都是不相等的，所以 Symbol 作为对象的属性名，可以保证属性不重名
Symbol 作为对象属性名时不能用点号，要是用方括号，因为点号后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性 

Symbol值作为属性名时，该属性是公有属性而不是私有属性，可以在类的外部访问，但是不会出现在 for...in   for...of 的循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回
如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到

2. 定义常量

使用字符串表示常量的问题是不能保证常量是独特的，但是使用Symbol定义常量，就可以保证这一组常量的值都不相等。

Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该Symbol值
如果没有则新建并返回一个以该字符串参数为名称的Symbol值，并登记在全局环境中供搜索。

Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key，用来检测该字符串参数作为名称的 Symbol 值是否已被登记

# 3.1.1 Map 与 Set

Map 和 Object 的区别：
1. 一个 Object 的键只能是字符串或者Symbol，但一个 Map 的键可以是任意值
2. Map 中的键值对个数是有序的（FIFO）,添加到对象中的键则不是
3. Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算
4. Object都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突

Set允许存储任何类型的唯一值，无论是原始值或者对象引用
Set中的特殊值：
+0 和 -0 在存储判断唯一性的时候是恒等的，所以不重复
undefined 和 undefined是恒等的，所以不重复
NaN 和 NaN 是不恒等的，但是在 Set 中只能存一个，不重复

# 3.1.2 Reflect 与 Proxy

Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
Reflect可以用于获取目标对象的行为，它与Object类似，但更容易读，为操作对象提供了一种更优雅的方式。

一个Proxy对象由两部分组成，target, handler

实例方法 get(target, propKey, receiver) 用于 target 对象上 propKey 的读取操作

set(target, propKey, value, receiver) 用于拦截target对象上的propKey的赋值操作
如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用
第四个参数receiver表示原始操作行为所在对象，一般是Proxy实例本身
apply(target, ctx, args) 用于拦截函数的调用，call 和 reply 操作，target 表示目标对象，ctx 表示目标对象上下文，args 表示目标对象的参数数组
has(target, propKey) 用于拦截 HasProperty 操作，即在判断 target 对象是否存在 propKey 属性时，会被这个方法拦截。此方法不判断一个属性是对象自身的属性还是继承的属性
construct(target, args) 用于拦截 new 命令，返回值必须为对象
defineProperty(target, propKey, propDesc) 用于拦截 Object.definePro 若对象不可扩展，增加目标对象上不存在的属性会报错；
若对象不可写或不可配置，则不能改变这些属性

erty 操作
getOwnPropertyDescriptor(target, propKey) 用于拦截 Object.getOwnPropertyD()返回值为属性描述对象或者undefined

ptor 操作
getPrototypeOf(target) 主要用于拦截获取对象原型的操作。

es6 中将 Object 的一些明显属于语言内部的方法移植到了 Reflect 对象上（当前某些方法会同时存在于 Object 和 Reflect 对象上），未来的新方法只部署在 Reflect对象上
Reflect 对象对某些方法的返回结果进行了修改，使其更合理
Reflect 对象使用函数的方式实现了 Object 的命令式操作

组合使用

Reflect对象的方法与Proxy对象的方法是一一对应的，所以Proxy对象的方法可以通过调用Reflect对象的方法获取默认行为，然后进行额外操作。

# 3.2.1 字符串
es6新增子串的识别方法
- includes
- startsWith
- endsWith

以上三个方法都可以接收两个参数，需要搜索的字符串和可选的搜索起始位置索引，不支持正则表达式，indexOf和lastIndexOf这两个方法会将正则表达式转换为字符串并搜索它

repeat():返回新的字符串，表示将字符串重复指定次数返回

字符串补全
padStart: 返回新的字符串，表示用参数字符串从头部左侧补全原字符串
padEnd: 。。。右侧补全
第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串，如果没有指定第二个参数，默认用空格填充

模板字符串
使用反引号，变量名卸载${}里面，${}里面也可以写JavaScript表达式

标签模板是一个函数的调用，其中调用的参数是模板字符串，常见的作用是过滤HTML字符串，防止用户输入恶意内容

# 3.2.2 数值

数值的表示
二进制：0b 或 0B
八进制：0o 或 0O

常量
Number.EPSILON属性表示 1 与大于 1 的最小浮点数之间的差
测试数值是否在误差范围内
属性特性
writable: false
enumerable:false
configurable: false

最大/最小安全整数
安全整数：在JavaScript中能够精确表示的整数，安全整数的范围在 2 的 -53 次方到 2 的 53 次方之间，超过这个范围的整数无法精确表示
最大整数范围：2 的53次方-1
属性特性
writable: false
enumerable:false
configurable: false

方法
Number对象新方法
Number.isFinite()

从全局移植到 Number 对象的方法
逐步减少全局方法，用于全局变量的模块化，方法的行为没有发生改变

# 3.2.3 对象

对象字面量
属性名表达式:es6允许使用表达式作为属性名，但是一定要将表达式放在方括号里面，属性的简洁表示法和属性名表达式不能同时使用，否则会报错

对象的扩展运算符

对象的新方法
Object.assign(target, source_1,...) 将源对象的所有可枚举属性复制到目标对象中，浅拷贝
Object.is(value1, value2) 用来比较两个值是否严格相等

# 3.2.4 数组

数组创建

类数组对象

扩展的方法

数组缓冲区: 是内存中的一段地址，定型数组的基础，实际字节数在创建时确定，之后可修改其中的数据，不可修改大小

视图是用来操作内存的接口,可以操作数组缓冲区或缓冲区字节的子集, 并按照其中一种数值数据类型来读取和写入数据

DataView 类型是一种通用的数组缓冲区视图, 其支持所有8种数值型数据类型

定型数组:数组缓冲区的特定类型的视图

可以强制使用特定的数据类型, 而不是使用通用的 DataView 对象来操作数组缓冲区

find()方法也可以用于定型数组, 但是定型数组中的方法会额外检查数值类型是否安全, 也会通过Symbol.species()确认方法的返回值是定型数组而非普通数组

concat()方法由于两个定型数组合并结果不确定, 故不能用于定型数组; 另外, 由于定型数组的尺寸不可更改, 可以改变数组的尺寸的方法比如:splice()不适用于定型数组


# 4.1 函数

默认参数: 只有在为传递参数或者参数为undefined的时候,才会使用默认参数, null值被认为是有效的值传递

函数参数默认值存在暂时性死区, 在函数参数默认值表达式中, 还未初始化赋值的参数值无法作为其他参数的默认值

不定参数: ...变量名, 具名参数只能放在参数组的最后, 并且有且只有一个不定参数

箭头函数

参数 => 函数体

当箭头函数含有多行语句, 用{} 包裹起来, 表示代码块, 当只有一行语句,并且需要返回结果时, 可以省略 {}, 结果会自动返回

当箭头函数要返回对象的时候,为了区分于代码块, 要用()将对象包裹起来

箭头函数里面没有this, super, auguments, new.target绑定

箭头函数中的this对象, 是定义函数时的对象, 而不是使用函数时的对象

不可以使用构造函数,也不可以使用 new 命令

适合使用的场景: 简化回调函数的写法,需要维护一个this上下文的时候,就可以使用箭头函数

不适合使用的场景:定义函数的方法,且该方法包含this(上面的例子中去掉setTimeout)

# 4.2 Class类

在 ES6 中, class 作为对象的模板被引入, 可以通过 class 关键字定义类

class 的本质是 function

可以看做是一个语法糖, 让对象原型的写法更加清晰, 更像面向对象编程的语法

类定义不会被提升, 这意味着, 必须在访问前对类进行定义, 否则就会报错

类中方法不需要function关键字

方法间不能加分号

类的主体

属性: prototype 

ES6中, prototype 依然存在, 虽然可以直接类中自定义方法, 但其实方法还是定义在 prototype 上

覆盖方法/初始化时添加方法:
```js
Example.prototype={

}
```
```js
Object.assign(Example.prototype, {
    //methods
})
```

静态属性: class本身的属性, 即直接定义在类内部的属性(Class.propname), 不需要实例化, ES6中规定, Class内部只有静态方法,没有静态属性
```js
class Example{
    //新提案
    static b = 2
}
//目前可行写法
Example.b = 2
```

公共属性:
```js
class Example{}
Example.prototype.a = 2
```

实例属性:定义在实例对象(this)上的属性
```js
class Example{
    a = 2
    constructor(){
        console.log(this.a)
    }
}
```
name属性:返回跟在 class 后的类名(存在时)
```js
let Example = class Exam {
    constructor(a) {
        this.a = a
    }
}
console.log(Example.name)
```

constructor 方法, 是类的默认方法,创建类的实例化对象时被调用

静态方法: 只有构造函数才能调用

实例方法: 只有实例才能调用

原型方法: 实例和构造函数够可以调用, 是共享的方法

类的实例化

new: class的实例化必须通过 new 关键字

实例化对象:共享原型对象

decorator 是一个函数, 用来修改类的行为, 在代码编译时产生作用

类修饰

第一个参数是 target, 指向类本身

封装和继承

可以通过extends实现类的继承, 子类 constructor 方法中必须由 super,且必须出现在 this 之前

super只能出现在子类的构造方法中

调用父类方法时,super作为对象,在普通方法中,指向父类的原型对象 ,在静态方法中,指向父类

# 4.3 模块

在 ES6 之前, 实现模块化使用的是 RequireJS 或者 seaJS

ES6 引入了模块化, 其设计思想是在编译时就能确定模块的依赖关系, 以及输入和输出的变量

ES6 的模块化分为导出(export)与导入(import)两个模块

ES6 的模块自动开启严格模式, 不管有没有在模块头部加上use strict

模块中可以导入和导出各种类型的变量, 如函数, 对象, 字符串, 数字, 布尔值, 类等

每个模块都有自己的上下文, 每一个模块内声明的变量都是局部变量, 不会污染全局作用域

每一个模块只加载一次(是单例的), 若再去加载同目录下同文件, 直接从内存中读取

export 和 import

模块导入导出各种类型的变量, 如字符串, 数值, 函数, 类

- 导出的函数声明与类声明必须要有名称(export default 命令另外考虑)
- 不仅能导出声明还能导出引用(例如函数)
- export 命令可以出现在模块的任何位置, 但必须处于模块顶层
- import 命令会提升到整个模块的头部, 首先执行

as的用法

export 命令导出的接口名称, 需和模块内部的变量有一一对应关系

导入的变量名,须和导出的接口名称相同, 即顺序可以不一致

使用as重新定义导出的接口名称, 隐藏模块内部的变量

import命令的特点:
- 只读属性: 不允许在加载模块的脚本里面,改写接口的引用指向,即改写import变量类型为对象的属性值, 不能改写import变量类型为基本类型的值
- 单例模式: 多次重复执行同一句import语句, 只会执行一次, 而不会执行多次. import同一模块, 声明不同接口引用, 会声明对应变量, 但只执行一次import
- 静态执行特性: import是静态执行,所以不能使用表达式和变量


export default命令

- 在一个文件或模块中,export,import可以有多个,export default仅有一个
- export default 中的 default 是对应的导出接口变量
- 通过 export 方式导出, 在导入时要加{},export default 则不需要
- export default 向外暴露的成员, 可以使用任意变量来接收

复合使用

```js
export {foo, bar} from "methods"
//相当于
import {foo, bar} from "methods"
export {foo, bar}
```

# 5.1 Promise对象

异步编程的一种解决方案, 从语法上来说, Promise 是一个对象, 从它可以获取异步操作的消息

Promise状态

- pending
- fulfilled
- rejected

除了异步操作的结果, 任何其他操作都无法改变这个状态

Promise对象只有: 从pending变为fulfilled和从pending变为rejected的状态改变,只要处于fulfilled和rejected, 状态就不会再变了即resolved

状态的缺点: 
- 无法取消 Promise, 一旦新建,就会立即执行,无法中途取消
- 如果不设置回调函数,Promise 内部抛出的错误,无法反映到外层
- 当处于 pending 状态时, 无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)

then方法

接收两个函数作为参数,第一个参数是 Promise 执行成功时的回调, 第二个参数时 Promise 执行失败时的回调, 两个函数只会有一个被调用

then方法的特点

在 JavaScript 事件队列的当前运行完成之前, 回调函数永远无法被调用

注意的点: 简便的 Promise 链式编程最好保持扁平化, 不要嵌套 Promise, 大多数浏览器中不能终止的Promise链的rejection, 建议后面加上
```js
.catch(error => console.log(error))
```

# 5.2 Generator函数

es6 新引入了 Generator 函数, 可以通过 yield 关键字, 把函数的执行流挂起, 为改变执行流程提供了可能, 从而为异步编程提供了解决方案.

Generator有两个区分于普通函数的部分:
1. function后面有一个星号, 表示函数为 Generator函数
2. 函数内部有 yield 表达式, 用来定义函数内部的状态

执行机制:
Generator函数返回一个指向内部状态对象的指针, 所以要调用遍历器对象 Iterator的next方法, 指针就会从函数头部或者上一次停下来的地方开始之执行
调用next, 执行到yield停下来, 将表达式后面的值作为返回对象的value属性值返回, 如果执行到return, done属性设置为 true, 有return就返回return后的值, 没有return就直接返回undefined

next方法

一般情况下, next方法不传入参数的时候, yield表达式的返回值时undefined, 当 next 传入参数的时候, 该参数会作为上一步 yield 的返回值

除了next,还可以使用for...of循环遍历Generator函数生产的 Iterator 对象

return 方法返回给定值, 并结束遍历Generator函数

throw 方法可以在 Generator 函数体外面抛出异常, 在函数体内捕获异常

yield* 表达式表示 yield 返回一个遍历器对象, 用于在 Generator 函数内部, 调用另一个 Generator 函数

使用场景:使用Iterator, 为不具备Iterator接口的对象提供遍历方法

# 5.3 async函数

async 是 ES7 才有的与异步操作有关的关键字, 和 Promise, Generator有很大关联

async 函数返回一个 Promise 对象, 可以使用then方法添加回调函数

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用
返回的是 Promise 对象的处理结果, 如果等待的不是 Promise 对象, 则返回该值本身

