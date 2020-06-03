

// let timer=null


// div1.addEventListener('drag',function(e){
//     if(timer){
//         return
//     }
//     timer=setTimeout(()=>{
//         console.log(e.offsetX,e.offsetY)

//         timer=null
//     },100)
    
// })


function throttle(fn,delay=500){
    // timer是闭包中的
    let timer=null
    return function(){
        if(timer){
            return
        }
        timer=setTimeout(()=>{

            fn.apply(this,arguments)

            timer=null
        },delay)
    }
}
const div1=document.getElementById('div1')
div1.addEventListener('drag',throttle(function(e){
    console.log(e.offsetX,e.offsetY)
},200))
