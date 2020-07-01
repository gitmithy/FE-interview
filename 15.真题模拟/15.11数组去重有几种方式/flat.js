

var arr=[1,2,[3,4],5]
Array.prototype.concat.apply([],arr)
// 等价于
Array.prototype.concat.call([],1,2,[3,4],5)
// 等价于
// [].concat(1,2,[3,4],5)

// 上面三种只能拍平一层


function flat(arr){
    // 验证arr中，还有没有深层数组
    const isDeep=arr.some(item=>item instanceof Array)
    if(!isDeep){
        return arr
    }
    const res=Array.prototype.concat.apply([],arr)
    return flat(res)//递归

}
const res=flat([1,2,[3,4,[10,20]],5])
console.log(res)
