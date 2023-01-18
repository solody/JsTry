## Callback

原始的异步代码写法，回调嵌套太多，代码会变成一大陀，很难阅读。

## Promise

让异步代码不再嵌套，竖着写，好阅读了一些，但一串then，代码语义感太差。

## Generator and yield

把包含异步的代码封装成一个 Generator 对象，分段执行。
有异步操作的语句用 yield 暂停返回，形成断点，继读执行别的代码后可以回来接着执行。

Generator 对象定义函数中包含异步操作的代码看起来跟同步代码一差不多了，
但是分段执行控制的代码复杂了，代码嵌套和then语句都被搬到了执行控制的代码里。

[Generator函数的含义与用法](http://www.ruanyifeng.com/blog/2015/04/generator.html)

## Async and Await

自动分段执行，消除回调嵌套。
自动处理 Promise，消除 then 语句。

[async 函数的含义和用法](https://www.ruanyifeng.com/blog/2015/05/async.html)