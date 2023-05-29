async function myAsync() {
    console.log('开始执行')
    let a = await new Promise(resolve => {
        console.log('异步1')
        setTimeout(() => {
            resolve('我是第一个异步操作的结果')
        }, 1000);
    });
    console.log('完成1')
    let b = await new Promise(resolve => {
        console.log('异步2')
        setTimeout(() => {
            resolve(a + '+我是第二个异步操作的结果')
        }, 2000);
    });
    console.log('完成2')
    return b;
}

myAsync().then(result => {
    console.log('完成3')
    console.log(result);
});