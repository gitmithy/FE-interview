const p1=document.getElementById('p1')

const div2=document.getElementById('div2')
const body=document.body
function bindEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}
bindEvent(p1,'click',event=>{
    event.stopPropagation() 
    alert('激活')
})

bindEvent(body,'click',event=>{
    // e.stopPropagation 
    // alert('取消')
    // console.log('body clicked')
    // console.log(e.target)
    // event.stopPropagation() 
    alert('取消')
})

// bindEvent(div2,'click',e=>{
//     // e.stopPropagation 
//     // alert('取消')
//     console.log('div2 clicked')
//     console.log(e.target)
// })