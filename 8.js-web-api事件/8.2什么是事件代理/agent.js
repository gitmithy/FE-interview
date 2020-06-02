function bindEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}
const btn1=document.getElementById('btn1')
bindEvent(btn1,'click',event=>{
    event.preventDefault()
    alert('clicked')
})

const div3=document.getElementById('div3')
bindEvent(div3,'click',event=>{
    event.preventDefault()
    const target=event.target
    if(target.nodeName==='A'){
        alert(target.innerHTML)
    }
})

const btn1=document.getElementById('btn1')
appeppp