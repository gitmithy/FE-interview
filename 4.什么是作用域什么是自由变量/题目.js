// this的不同应用场景，如何取值？
// 手写bind函数
// 实际开发中闭包的应用场景，举例说明
// 创建10个'<a></a>'标签，点击的时候弹出来对应的序号
let i, a
for (i = 0; i < 10; i++) {
    a = document.createElement('a');
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function(e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}