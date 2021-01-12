// Promise.resolve().then(() => {
//   console.log(1)
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

// Promise.resolve().then(() => {
//   console.log(1)
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

Promise.resolve().then(() => {
  console.log(1)
  throw new Error('error1')
}).catch(() => {
  console.log(2)
}).catch(() => {
  console.log(3)
})