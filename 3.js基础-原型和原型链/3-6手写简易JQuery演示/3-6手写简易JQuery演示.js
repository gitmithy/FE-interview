class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector);
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i];
            fn(elem)
        }
    }
    on(type, fn) {
            return this.each(elem => {
                elem.addEventListener(type, fn, false)
                    // addresizelistener
            })
        }
        //扩展更多DomApi


}
// 插件
jQuery.prototype.dialog = function(info) {
    alert(info);
}

//造轮子
class myjQuery extends jQuery {
    constructor(selector) {
            super(selector)
        }
        // 扩展自己的方法
    addClass(className) {

    }
    style(data) {

    }
}



// 使用

// const $p=new jQuery('p')
// $p
// $p.on('click',()=>alert('clicked'))
// $p.each((elem)=>console.log(elem.nodeName))
// $p.get(1)