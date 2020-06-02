const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const newP = document.createElement("p");
newP.innerHTML = "this is p1";

div1.appendChild(newP);

const p1 = document.getElementById("p1");
div2.appendChild(p1);

// 获取父元素
console.log(p1.parentNode);

// 获取子元素列表
const div1childNodes=div1.childNodes;
console.log(div1.childNodes)
const div1childNodesP=Array.prototype.slice.call(div1.childNodes).filter(child=>{
    if(child.nodeType===1){
        return true
    }
    return false
})
console.log('div1childNodesP',div1childNodesP)

// 删除节点
div1.removeChild(div1childNodesP[0])