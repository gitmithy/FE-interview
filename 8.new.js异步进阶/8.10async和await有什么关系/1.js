async function fn1 () {
    return 100
}
const res1 = fn1()//执行async函数，返回的是一个promise对象
res1.then(data => {
    console.log(data,'data')
})




!(async function () {
    const p1 = Promise.resolve(300)
    const data = await p1
    console.log('data',data)
})()



!(async function () {
    const data1 = await 400
    console.log('data1',data1)
})()


async function fn2 () {
    return Promise.resolve(200)
}
!(async function () {
    const data2 = await fn2()
    console.log('data2',data2)
})()





!(async function () {
    const p4 = Promise.reject('err1')
    try {
        const res= await p5
    } catch (error) {
        console.log(error) //try...catch 相当于promise catch
    }
})()




!(async function () {
    const p5 = Promise.reject('err1')  //rejected
    const res = await p5   //await->then 不会执行，必须使用try..catch
    console.log('res',res)
})()

