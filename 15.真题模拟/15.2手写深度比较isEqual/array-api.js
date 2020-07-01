const arr=[10,20,30,40]

// const popRes=arr.pop()//返回40
// console.log(popRes,arr)

//shift
// const shiftRes=arr.shift(5) //返回10
// console.log(shiftRes,arr)

// const pushRes=arr.push(50)  //返回数组的长度
// console.log(pushRes,arr)


//unshift
// const unshiftRes=arr.unshift(5) //返回数组的长度
// console.log(unshiftRes,arr)


//纯函数:
// 1.不改变原数组(没有副作用):
// 2.返回一个数组

//concat
const arr1=arr.concat([50,60,70])
console.log(arr1)

//map
const arr2=arr.map(num=>num*10)
console.log(arr2)

//filter
const arr3=arr.filter(num=>num>30)
console.log(arr3)

//slice
const arr4=arr.slice()//类似于做了一个拷贝
console.log(arr4)

//非纯函数
//push pop shift unshift   //改变原数组

// array.forEach(element => {
    
// });
// some 
// every
// reduce

// 不会返回一个纯函数