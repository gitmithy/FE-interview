const arr=[10,20,30,40,50]

//slice纯函数 截取数组

const arr1=arr.slice()
const arr2=arr.slice(1,4)
const arr3=arr.slice(2)
const arr4=arr.slice(-2)
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

//splice 非纯函数  剪切改变了原数组
const spliceRes=arr.splice(1,2,'a','b','c')//前两个参数是剪切位置
console.log(spliceRes,arr)

const res =[10,20,30].map(parseInt)
console.log(res)

//拆解
[10,20,30].map((num,index)=>{
    return parseInt(num,index)
})