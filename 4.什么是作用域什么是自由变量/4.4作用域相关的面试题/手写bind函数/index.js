Function.prototype.bind1=function(){
    // 将参数解析为数组
    const args=Array.prototype.slice.call(arguments)
    // 获取this(取出数组第一项，数组剩余的就是传递的参数)
    const t=args.shift()
    const self=this//当前函数
    //返回一个函数
    return function(){
        return self.apply(t,args)
    }
}