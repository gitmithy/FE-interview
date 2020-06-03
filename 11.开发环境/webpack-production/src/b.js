function fn(){
    console.log('fn')
}
const name='a'
const obj={
    name:'zhangsan2'
}


// 如果key和value名字设置一样可以简写
export default{
    fn,
    name,
    obj
}