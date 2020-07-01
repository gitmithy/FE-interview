//传统方式
// function unique(arr){
//     const res=[]
//     arr.forEach(item => {
//         if(res.indexOf(item)<0){
//             res.push(item)
//         }
//     });
//     return res
// }

console.log(unique([30,20,20,10,10,40]))

//使用set（无序不能重复）

function unique(arr){
    const set=new Set(arr)
    return [...set]
}

const res=unique([30,10,10,20,20,40,10])
console.log(res)


