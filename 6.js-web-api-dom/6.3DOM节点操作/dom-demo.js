// const div1=document.getElementById('div1')
// console.log('div1',div1)
// const divList=document.getElementsByTagName('div')
// console.log('divList.length',divList.length)
// console.log('divList[0]',divList[0]) 

// const containerList=document.getElementsByClassName('container')
// console.log('containerList.length',containerList.length)
// console.log('containerList[0]',containerList[0]) 

// const PList=document.querySelectorAll('p')
// console.log('PList',PList)

const PList=document.querySelectorAll('p')
const p1=PList[0]


// p1.style.width='100px'
// console.log(p1.style.width)
// p1.className='red'
// console.log(p1.className)
// console.log(p1.nodeName)
// console.log(p1.nodeType)

p1.setAttribute('data-name','imooc')
console.log(p1.getAttribute('data-name'))
p1.setAttribute('style','font-size:50px')
console.log(p1.getAttribute('style'))
