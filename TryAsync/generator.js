// 用 yield 关键字把 myGenerator 函数的代码分为三段
function* myGenerator(x) {
    console.log("code1");
    let a = yield x + 2;
    console.log("code2");
    let b = yield a + 1;
    console.log("code3");
    return b;
}

// 创建代码迭代器
let g = myGenerator(1);

// 执行第一段
console.log(g.next());
// 传参给变量 a，执行第二段
console.log(g.next(1));
// 传参给变量 b,并执行第三段
console.log(g.next(123));