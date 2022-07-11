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

# 4.1 函数

# 4.2 Class类

# 4.3 模块

# 5.1 Promise对象

# 5.2 Generator函数

# 5.3 async函数

