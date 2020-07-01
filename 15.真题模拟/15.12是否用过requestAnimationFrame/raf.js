const div1=$('#div1')
let curWidth=100
const maxWidth=640


// function animate(){
//     curWidth=curWidth+3
//     $('#div1').css('width',curWidth)
//     if(curWidth<maxWidth){
//         setTimeout(animate,16.7)
//     }
// }

function animate(){
    curWidth=curWidth+3
    $('#div1').css('width',curWidth)
    if(curWidth<maxWidth){
        window.requestAnimationFrame(animate)//时间不用自己控制
    }
}
animate()