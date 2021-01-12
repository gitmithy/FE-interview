function muti (num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num*num)
    }, 1000);
  })
}
const nums = [1, 2, 3]
// 一次全部
// nums.forEach(async (i) => {
//   const res = await muti(i)
//   console.log(res)
// })

// 依次执行
!(async function () {
  for (let i of nums) {
    const res = await muti(i)
    console.log(res)
  }
})()