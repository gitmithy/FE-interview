const list=document.getElementById('list')
for(let i=0;i<10;i++){
    const li=document.createElement('li')
    li.innerHTML=`list item ${i}`
    list.appendChild(li)
}