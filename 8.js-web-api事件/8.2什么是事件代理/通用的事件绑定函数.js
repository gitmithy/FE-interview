function bindEvent(elem,type,selector,fn){
    if(fn==null){
        fn=selector
        selector=null
    }
    elem.addEventListener(type,event=>{
        let target=event.target
        if(selector){
            target=event.target
            if(target.matcher(selector)){
                fn.call(target,event)
            }
        }else{
            fn(e)
        }
    })
}