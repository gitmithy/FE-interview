const btn1=document.getElementById('btn1')

function bindEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}

const a=document.getElementById('link1')
bindEvent(btn1,'click',e=>{
    // 阻止默认行为
    e.preventDefault()


    // 获取触发的元素
    console.log(e.target)
    alert('clicked')
})