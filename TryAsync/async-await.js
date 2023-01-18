async function myAsync() {
    let a = await new Promise(resolve => {
        setTimeout(() => {
            resolve('我是第一个异步操作的结果')
        }, 1000);
    });
    let b = await new Promise(resolve => {
        setTimeout(() => {
            resolve(a + '我是第二个异步操作的结果')
        }, 2000);
    });

    return b;
}

myAsync().then(result => {
    console.log(result);
});